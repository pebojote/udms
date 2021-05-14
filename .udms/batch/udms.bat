@echo off
SETLOCAL
doskey serve='vue-cli-service serve'
doskey build='vue-cli-service build'
doskey unit='vue-cli-service test:unit'
doskey lint='vue-cli-service lint'

SET "%FILE%=%1"
SET "%ADDFILE%=%~1"

CALL :add %FILE%
EXIT /B %ERRORLEVEL%
:add
    git add %ADDFILE%
    CALL :commit
    EXIT /B %ERRORLEVEL%
EXIT /B 0
:commit
    SET /p description=describe:
    git commit -m  %description%
    CALL :push
    EXIT /B %ERRORLEVEL%
EXIT /B 0
:push
    SET /p branch=branch:
    git push origim %branch%
EXIT /B 0