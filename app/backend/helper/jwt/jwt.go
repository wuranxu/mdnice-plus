package jwt

import (
	"github.com/dgrijalva/jwt-go"
	"mdnice-plus/model"
	"time"
)

const (
	SecretKey   = "mdnice-plus-is-good" //私钥
	ExpiredTime = 3 * 24 * 60 * 60
)

type CustomClaims struct {
	ID       uint   `json:"id"`
	Username string `json:"username"`
	jwt.StandardClaims
}

func GenerateToken(user *model.MdNicePlusUser) (string, error) {
	customClaims := &CustomClaims{
		ID:       user.ID, //用户id
		Username: user.Username,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: time.Now().Add(time.Duration(ExpiredTime) * time.Second).Unix(), // 过期时间，必须设置
		},
	}
	//采用HMAC SHA256加密算法
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, customClaims)
	return token.SignedString([]byte(SecretKey))
}

func ParseToken(tokenStr string) (*CustomClaims, error) {
	token, err := jwt.ParseWithClaims(tokenStr, &CustomClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(SecretKey), nil
	})
	if err != nil {
		return nil, err
	}
	if claims, ok := token.Claims.(*CustomClaims); ok && token.Valid {
		return claims, nil
	}
	return nil, nil
}
