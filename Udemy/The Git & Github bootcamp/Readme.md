
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
```
===================
>>>>>>>>>>>>>>>>>>>
```


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

```
<<<<<<< HEAD
<<<<<<< Updated upstream
```
📌 git diff HEAD lists all changes between your current working directory and HEAD
```>>>>>>> Stashed changes```

📌 git diff --staged / git diff --cached The changes between last commit and staging area
```=======```
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
```>>>>>>> 3e48a3397a1be98df431eb62491145e8bba8f5dc```

📌 Diff-ing Specific Files
  git diff HEAD <filename>
  git diff --staged <filename>

📌 Comparing Branches

📌 git diff <branch1>..<branch2>

📌 git diff <commit1>..<commit2>

📌 Diff View vs File View vs Unstaged

📌 Git Diffs Visulaization with GUIs

📌 The Parent Commit of HEAD (HEAD~1)

📌 Git Stash Basics

📌 Git Stash Save

📌 Git Stash Pop

📌 Git Stash Apply

📌 Dropping & Cleaning The Stash

📌 Working with Multiple Stashes

📌 What happens when I've uncommited changes on one branch and switched to another branch There are two options:
   - Those changes come with me to the destination branch
   - Git won't let me switch if it detects potential conflicts

📌 git statsh to pause to save my uncommitted changes (staged and unstaged) and stash them so we can return to them later without having to make unnecessary commits

📌 git stash save === git stash save

📌 git stash pop (to remove the most recently stashed changes in your stash and re-apply them to your working directory)

📌 git stash apply (stash stays in the stash) vs git stash

📌 Stashing Multiple Items in The Stack Stashes

📌 git stash list

📌 Applying Specific Stashes 
   git stash apply stash@{2}

📌 git stash drop stash@{2}

📌 Checking out commits

📌 Escaping Detached HEAD

📌 Discarding Changes with gut checkout

📌 Git Restore

📌 Git Reset

📌 Git Revert

📌 git checkout is Like a git swiss army knife

📌 We just need the first 7 digits of a commit hash

📌 HEAD usually reference to a branch NOT a specific commit

📌 When we checkout a particular commit, HEAD points at that commit rather than at the branch pointer

📌 Switching to a destination branch (master in that example) we change the reference of HEAD to destination branch so w reattached It

📌 HEAD~1 refers to commit before HEAD (Parent)

📌 HEAD~2 refers to commit before HEAD (grandparent) so on so force

📌 git checkout HEAD <filename> to discard any changes in that file, reverting back to the HEAD. There is a anothof reverting changes 
git checkout -- <file>

<<<<<<< HEAD
📌 git restore <file-name> (returns HEAD as a Default Source)=== git checkout HEAD <file-name>
=======

Application Live:
>>>>>>> 3e48a3397a1be98df431eb62491145e8bba8f5dc

📌 git restore --source HEAD~1 <filename>

📌 If you've accidentally added a file to your staging area  with <git-add> and you don't wish to include it in the next commit, you can use git restore to remove it from staging

📌 git restore --staged <file-name>

📌 git reset <commit-hash> We don't lose the changes we lose the commits

📌 git reset --hard <commit-hash> Delete The Specific Commits Hashes and Its Changes

📌 git revert <commit-hash> Should be used when collboration occurs as maybe

📌 What Does Github Do?

📌 Cloning?

📌 Registering for Github and Setting Up SSH Keys

📌 Creating Github Repos

📌 Working With Remotes

📌 Git Push

📌 Github is a hosting platform for git repositories You can put git repos.

📌 Git is a VCS and Github is a hosting git repos

📌 Gitlab, Bitbucket, Gerrit and Github

📌 https://github.com/trending/ developers  for showing Trending Repostories

📌 Being Active on Github is the best way to stay up to date wit projects and tools you rely on

📌 Clonging is a local copy of an existing repository you get

📌 git clone <url> Make sure you're not inside a repo when you clone it
(Copy + Git Repository Initialization to the full Git History)

📌 Anyone can clone a repository from Github without any permissions

📌 But PUSHING Changes to github repo that's another story entirely. You need permissions to do that

📌 SSH stands for Secure Shell
   You need to be authenticated on Github to do certain operations like pushing up code from your local maching
   Once It is configure you can connect to Github without having to supply your username or password

📌 Creation of SSH Key and attaching to Github Repo

📌 Destinations to cloud repository are so-called remotes
remote === url where a hosted repostory lives + name

📌 git remote or git remote -v (verbose)
:> The name of remote + url

📌 Remote = URl + label

📌 git remote add <name> <url>

📌 Origin is a conventional Git Remote Name It's just a name for a Url

📌 When we clone a Github repo, The Default Remote name setup for us is called origin

📌 git push <remote> <branch>

📌 Github at the end of 2020 make the default branch name is main NOT master

📌 git branch -m <old-branch> <new-branch>

📌 Once we add Readme.md file or choosing a license or even .gitignor we need to create branch so by default github makes main as the default branch

📌 git branch -M <new-branch-name>

📌 Remote Tracking Branches

📌 Git Fetch

📌 Git Pull

📌 <Remoting-Tracking-Branch> is a reference to the state of the master branch on the remote. I can't move this myself. It's like a bookmark pointing to the last known commit on the master branch on origin

📌 git branch -r (to show remote tracking branch)

📌 Your Branch is ahead of 'origin/master' by 2 commits

📌 Once you've cloned a repository, we have all the data and GIT history for the project at that moment in time However, that does not mean It's all in my workspace

📌 git branch -r to view the remote branches our local repository knows about

📌 By default, my master branch is already tracking / connected origin/master

📌 I could checkout origin/newBranch, but That puts me in Detached HEAD

📌 Fetching vs Pulling

📌 git fetch will fetch changes into local repository

📌 git pull will pull changes into workspace

📌 git fetch <remote> If not specified, <remote> defaults to origin

📌 git fetch <remote> <branch>

📌 Unlike fetch pull actually updates our HEAD branch 

📌 git pull = git fetch + git merge
             (update the remote tracking branch with the latest changes from remote repository  )

             (update my current branch with whatever changes are on the remote tracking branch)

📌 git pull <remote> <branch>

📌 Pulls can result in merge conflicts

📌 git pull without specifying a particular remote or branch to pull from.
Git assumes the following:
-Remote will be default to origin
-branch will be default to current branch

📌 Repo Visibility: Public vs Private

📌 Adding Github Collaborators

📌 README.md files

📌 Writing Markdown

📌 Github Gists

📌 Github Pages (Hosting Static WebPages from our repository)

📌 README File is used to communicate important information about a repository including:
-What the project does?
-How to run the project?
-Why It's noteworthy?
-Who maintains the project?

📌 Github will recongnize README and automatically display it on repo's homepage

📌 Markdown is a text-to-HTML conversion tool for web writers. Markdown allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML).

📌 Thus, “Markdown” is two things: (1) a plain text formatting syntax; and (2) a software tool, written in Perl, that converts the plain text formatting to HTML. See the Syntax page for details pertaining to Markdown’s formatting syntax. You can try it out, right now, using the online Dingus.

📌 markdown-it demo

📌 Markdown crash course

📌 Github Pages are public pages that are hosted and published via github

📌 Static Sites don't Support Server Side Code JUST HTML/CSS/JS

📌 User Site: username.github.io (You get only one user site per Github Acccount)

   Projet Site: usernme.github.io/repo-name  (Each Github Repo repo can have a corresponding hosted website )

📌 It is convenient to publish your project site on branch called "gh-pages"

📌 The Problems with Working on a single branch

📌 Feature Branch Workflow

📌 Pull requests

📌 Branch Protection Rules

📌 Forking

📌 Fork-And-Clone Workflow

📌 Centralized Workflow (Everyone works on master/main)
   AKA The most basic workflow possible
   They working on Just Single Branch (Main/Master)

📌 if you are in a team and everyone pushes his git to Github repository everyone should pull what other's teammate pushed to as the tip of your current branch is behind its remote counterpart 

📌 Centralized Workflow vs Feature Branch

📌 Treat master/main branch as the official project history

📌 Merging In Feature Branches

📌 Pull Requests (PR) are not native to Git Itself

📌 For large projects There are some people who have permissions to push to master directly who is often the Boss So there are PRs
 
📌

📌

📌

📌

📌

📌

📌

📌

📌

📌

📌

📌

📌

📌

📌

📌

📌

📌

📌

📌

📌

📌

📌

📌

📌

📌

📌

📌

📌