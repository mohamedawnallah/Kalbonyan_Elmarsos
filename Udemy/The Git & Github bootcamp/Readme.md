
# Github Distributed VCS

📌 What is Git?

📌 Understanding the Difference between Git and Github

📌 History of Git ?

📌 Who Uses Git ?

📌 What does git do for us ?

📌 The Default Branch name is main instead of master

📌 Git is just a checkpoints

📌 Branches are just pointers to a specific commit

📌 branch early, and branch often

📌 git checkout -b [yourbranchname] create a new branch and check it out

📌 The first term of get or its initial name is "the stupid content tracker"

📌 GIT stands for Global Information Tracker

📌 Tech-Adjacent Roles uses Git as well as governments through that website you can find which gonverment uses git (https://government.github.com/community/)

📌 Git vs Github

📌 The Different ways of interacting with git CommandLine Interface and GUIs

📌 Installation Git

📌 Installing GitKraken

📌 Configuring your Git name and Email

📌 Terminal Crash course videos

📌 Graphical User Interface vs Command Line Interface

📌 The Rise of Git GUI's

📌 Most Macs come with git preinstalled

📌 git log (for checkpoints and their authors)

📌 git config --global user.email email@

📌 git config --global user.name "name"

📌 git config user.name

📌 git config user.email

📌 Installation gitkraken

📌 Basic Unix Commands

📌 touch app.js to create file called app.js in the current working directory

📌 rm app.js to remove file called app.js in the current working directory

📌 rm -f vs rm -d

📌 mkdir vs touch

📌 open . command to open finder where the same directory is working one

📌 file and folder creation, deletion and modifications instructions

📌 ls -a Unix Command to show hidden files

📌 rm -rf (rf stands for recursive, force)

📌 What are Git Repos?

📌 Git Init

📌 Git Status

📌 Understanding .git folder

📌 The Committing Workflow

📌 Git add

📌 Git commit

📌 Git log

📌 What is Git Repository?

📌 What is Git Init ?

📌 The mysterious git folder

📌 Git tracks everthing nested into folders

📌 DO NOT INIT A REPO INSIDE A REPO

📌 Working Directory vs Staging Area vs Repository Area (which is .git folder)

📌 if you type git commit It will prompts a text editor to type in

📌 git commit -m to pass an inline commit message rather than launching a text editor

📌 git log retrieves log of commits

📌 Commit hash overview

📌 Writing Atomic Commits

📌 Configuring Default Editor

📌 Working with a GUI

📌 Amending Commits

📌 Git Ignore

📌 Navigating the Git Documentation

📌 Writing Good Commit Messages

📌 One command can have many options

📌 Atomic means a basic and single unit | Irreducible, focuses only on a single thing
   
📌 Break up commits to achieve atomic commits concept

📌 The way writing comitting messages Present Tense
   and Imperative Style

📌 What is Vim ?

📌 Configuration Git's Default Editor

📌 We need commit hashes to undo a commit

📌 git log --abbrev-commit

📌 git log --oneline

📌 Committing with a GUI GITKARKEN Tool

📌 git commit --amend to redo the previous commit 
  1.Changes you forgot 2.Typo you've made in commit message

📌 There are files and directories to ignore in a given repository so we use .gitignore file for whatever you don't want to commit:

Secrets, API Keys, Credentials

Operating System Files (.DS_Store on Mac)

Log Files (Files are output your application automatically generated)

Dependencies and Packages

📌 Three Patterns to ignore files and folders:
.DS_Store (will ignore all the files names .DS_Store)

folderName/ (will ignore the entire directory)

*.log (will ignore any files with .log extension)

📌 gitignore.io

📌 Branching what is it? why use it?

📌 Understanding Git Head

📌 Git Branch

📌 Git Switch

📌 Git Checkout

📌 Git Deletion and Renaming Branches

📌 Heads and Refs behind the scenes

📌 Master vs Main Branch

📌 Each commit has Its own Hash and at least references one parent commit before it

📌 Branches enable us to create separate contexts where we can try new things or even work on multiple ideas

📌 Linear fashion vs non linear one

📌 you're always working on a branch which it is branch master

📌 Default branch name is master branch

📌 In 2020, "Github" renamed the default branch from master to main

📌 The default git branch is still master

📌 HEAD is a pointer to current location in repository it is usually a pointer to the branch reference 

📌 HEAD always points to latest commit you made on the master branch is SIMPLY A BRANCH POINTER

📌 Branch are bookmarks only one branch can be opened

📌 git branch to view current branch you're working on

📌 The active branch has asterisk next to it

📌 git branch <branchname> that create a branch (It does not switch HEAD) based upon the current HEAD

📌 git switch <branch-name>

📌 git commit -a -m <message> adding all unstaging changes

📌 git checkout <branch-name> switching branches as well as restore working tree files 

📌 git checkout <branch-name> vs git switch

📌 git switch -c <branch-name> with -c flag to create a new branch and switch to it

📌 git checkout -b <branch-name> with -b flag to create a new branch and switch to it

📌 While There is no application with a file there will be no conflicts

📌 git branch -d <branch-name> to delete a branch or that command
git branch --delete <branch-name>

📌 YOU CAN NOT DELETE A BRANCH THAT YOU'RE CURRENTLY IN

📌 git branch -D or 
   git branch --delete --force
   To DELETE THE BRANCH FORCEly

📌 To Rename a branch you've to be on the branch you wanna rename
git branch -m <new-branch-name>

📌 Head Reference a branch and each branch reference a commit

📌 Cat(concatenate) command is very frequently used in Linux. It reads data from the file and gives their content as output. It helps us to create, view, concatenate files. So let us see some frequently used cat commands. 

📌 Behind the scenes .git folder

📌 Fast Forward Merges

📌 Git Merge & Merge Commits

📌 Resolving Merge Conflicts

📌 Using VSCode to Resolve Conflicts

📌 Some people treat master branch the source of truth or the most stable build of an application

📌 Master Branch and Feature Branch

📌 - We merge branches, not specifc commits
   - We always merge to the current HEAD branch

📌 receiving branch

📌 git merge branch

📌 Fast-Forward Merge

📌 Not every merge is fast forward

📌 Commits can have multiple parents whenever we make a merged commit

📌 Merge Commit vs Fast Forward Merge

📌 Merge Conflicts is a multistep process Resolving Conflicts and commiting results

📌 Git changes the contents of your files to indicate conflicts that It wants you to resolve

📌 The content from branch you're going to merge is displayed between the 
===================

>>>>>>>>>>>>>>>>>>>

📌 Accept Incoming Change vs Current Change

📌 Reading Diffs

📌 Git Diff Basics

📌 Diffing Branches

📌 Diffing Commits

📌 Diffing Specific Files

📌 Git diff --staged

📌 We can use the git diff command to view changes between commits, branches, files, working directory and more

📌 we use git diff alongside commands like git status and git log

📌 git status, git diff and git log are informative commands

📌 Reconsolidation of git log --oneline

📌 git diff compares Staging Area and Working Directory

📌 git Explains Which file it is comparing. Usually There is two versions of the same file

📌 Git also declares one file as "A" and the other as "B"

📌 Next we have <File-Meta-Data>The first two numbers are the hashes of the two files and last nuber is an internal file mode identifier

📌 Markers

📌 Then We have chunks That are modified also Chunks don't contain only modified changes but also unchanged lines to provide some context

📌 Each Chunk Starts with a Chunk Header found between @@ and @@

📌 Then We've actual Changes

📌 Lines begin with - comes from file a

📌 Lines begin with + comes from file b

📌 Staging Area Also Refers to an Index

📌 git diff HEAD lists all changes in the working tree since your last commit

📌

📌

📌

📌

📌

📌

📌


Application Live:

https://movie-fight-awni.vercel.app/









