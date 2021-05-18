#!/bin/sh

alias serve='vue-cli-service serve'
alias build='vue-cli-service build'
alias unit='vue-cli-service test:unit'
alias lint='vue-cli-service lint'

alias status='git status'

add () {
    git add "$1"
    commit
}

commit () {
    read -p "Describe: " description
    git commit -m "$description"
}

push () {
    read -p "Branch: " branch
    git push origin "$branch"
}