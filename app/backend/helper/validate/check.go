package validate

import (
	valid "gopkg.in/go-playground/validator.v9"
	"mdnice-plus/helper/exception"
)

var check = valid.New()

func Check(data interface{}, msg exception.ErrString) error {
	if err := check.Struct(data); err != nil {
		return msg.New(err)
	}
	return nil
}
