// picture repo

package pic

import (
	"fmt"
	"github.com/go-resty/resty/v2"
	"time"
)

const (
	user  = "woodywrx"
	repo  = "picture"
	token = "56a5797a2fb4a3cdfca439082da7dee1"
)

var (
	DefaultGiteeRepo = NewGiteeRepo(user, repo, token)
)

type GiteeRepo struct {
	user  string
	repo  string
	token string
}

func NewGiteeRepo(user, repo, token string) *GiteeRepo {
	return &GiteeRepo{
		user:  user,
		repo:  repo,
		token: token,
	}
}

// CreateFile create image file in gitee according to timestamp
func (g *GiteeRepo) CreateFile(img string) (string, error) {
	client := resty.New()
	date := time.Now().Format("2006-01-02")
	filepath := fmt.Sprintf("%v/%v-image.png", date, time.Now().Unix())
	resp, err := client.R().
		EnableTrace().
		SetBody(map[string]string{"access_token": g.token, "message": "from mdnice_plus", "content": img}).
		Post(fmt.Sprintf("https://gitee.com/api/v5/repos/%s/%s/contents/%s", g.user, g.repo, filepath))
	if err != nil {
		return "", err
	}
	if resp.StatusCode() != 201 {
		return "", fmt.Errorf("create file failed")
	}
	url := fmt.Sprintf("https://gitee.com/%s/%s/raw/master/%s", g.user, g.repo, filepath)
	return url, nil
}


