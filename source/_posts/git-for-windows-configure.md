---
title: Git for Windows 配置
date: 2020-10-05 23:19:40
categories:
  - 开发相关
tags:
  - git
  - bash
  - bashrc
---

主要是我自己`Git`配置的备份...

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
  alias gaa='git add --all'
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

以下是`git bash`终端配色设置

```
# ~/.minttyrc
Font=Fira Code Retina
FontHeight=14
Transparency=low
FontSmoothing=full
Locale=zh_CN
Charset=UTF-8
Columns=88
Rows=26
OpaqueWhenFocused=no
Scrollbar=none
Language=zh_CN

ForegroundColour=255,255,255
BackgroundColour=0,43,54
CursorColour=220,130,71

BoldBlack=128,128,128
Green=64,200,64
BoldGreen=64,255,64
Yellow=190,190,0
BoldYellow=255,255,64
Blue=135,144,255
BoldBlue=30,144,255
Magenta=211,54,130
BoldMagenta=255,128,255
Cyan=64,190,190
BoldCyan=128,255,255
White=250,240,230
BoldWhite=250,240,230

BellTaskbar=no
Term=xterm-256color
FontWeight=400
FontIsBold=no
BellType=0

CtrlShiftShortcuts=yes
ConfirmExit=no
AllowBlinking=yes
BoldAsFont=no
```

以下是`bash`配色配置

```bash
# ~/.config/git/git-prompt.sh
PS1='\[\033]0;$TITLEPREFIX:$PWD\007\]' # set window title
PS1="$PS1"'\n'                   # new line
PS1="$PS1"'\[\033[32;1m\]'       # change to green
PS1="$PS1"'➜  '
PS1="$PS1"'\[\033[33;1m\]'       # change to yellow
PS1="$PS1"'\W'                   # current working directory
if test -z "$WINELOADERNOEXEC"
then
    GIT_EXEC_PATH="$(git --exec-path 2>/dev/null)"
    COMPLETION_PATH="${GIT_EXEC_PATH%/libexec/git-core}"
    COMPLETION_PATH="${COMPLETION_PATH%/lib/git-core}"
    COMPLETION_PATH="$COMPLETION_PATH/share/git/completion"
    if test -f "$COMPLETION_PATH/git-prompt.sh"
    then
        . "$COMPLETION_PATH/git-completion.bash"
        . "$COMPLETION_PATH/git-prompt.sh"
        PS1="$PS1"'\[\033[36m\]'  # change color to cyan
        PS1="$PS1"'`__git_ps1`'   # bash function
    fi
fi
PS1="$PS1"'\[\033[32m\] '        # change to white
PS1="$PS1"'% '                 # prompt: always %
PS1="$PS1"'\[\033[0m\]'        # change to white

```

最终效果:

![](https://img-1251985644.file.myqcloud.com/img/blog/git-for-windows-configure/LE65d0lAc5GKN4RK.png)

![](https://img-1251985644.file.myqcloud.com/img/blog/git-for-windows-configure/eDy1fDMaEN1xYqH1.png)

先这样吧，有空回来补
