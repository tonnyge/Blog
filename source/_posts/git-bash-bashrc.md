---
title: Git Bash .bashrc 配置
date: 2020-10-05 23:19:40
categories:
  - 开发相关
tags:
  - git
  - bash
  - bashrc
---

```bash
# ~/.bashrc

# Display Chinese and color
alias ls='ls --show-control-chars --color'
alias dir='dir -N --color'

# alias
alias ll='ls -l'
alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'
alias .....='cd ../../../..'
alias ......='cd ../../../../..'

## git alias
  alias g='git'
  alias ga='git add'
  alias gaa='git add -all'
  alias gcl='git clone'
  alias gp='git push'
  alias gl='git pull'
  alias gcmsg='git commit -m'

  alias gb='git branch'
  alias gbr='git branch -r'
  alias gba='git branch -a'

  alias gco='git checkout'
  alias gcb='git checkout -b'

  alias gm='git merge'

  alias gd='git diff'
  alias gdw='git diff --word-diff'

  alias gst='git status'

```

先这样吧，有空回来补
