# Changing Your Git Author Identity

Before we jump into solutions, let's find out what exactly it is you want to accomplish:
a) Change the author information before making a commit
b) Change the author information after making a commit (i.e. for historical commits)

Let's look at both cases in detail:

## Changing Actual Your Git Author Identity

There are three ways to change your committer identity in Git. All of these methods only affect future commits, not past ones!

### Changing Your Committer Name & Email Globally

You can run the "git config" command with the --global flag; this will make sure all of your future commits use the given information:

```sh
$ git config --global user.name "John Doe"
$ git config --global user.email "john@doe.org"
```

### Changing Your Committer Name & Email per Repository

If you want to use special settings only when working in a certain repository, you can simply omit the --global flag. This makes the configuration valid only in that repository:

```sh
$ git config user.name "John Doe"
$ git config user.email "john@doe.org"
```

### Changing the Author Information Just for the Next Commit

Finally, with the --author flag, you can also overwrite the author information for just the next commit:

```sh
git commit --author="John Doe <john@doe.org>"
```

## Editing the Author of Past Commits
> **NOTE**
Editing Past Commits Rewrites History!
No matter how exactly we change the information of past commits, there's one thing to always keep in mind: if we do this, we are effectively **rewriting commit history**.
This is nothing to take lightly: you will create new commit objects in this process, which can become a serious problem for your collaborators - because they might have already based new work on some of the original commits.
Therefore, **think twice before you rewrite your commit history**!

There are three basic ways to edit your past commits:

### Using --amend for the Very Last Commit

In case you want to change **just the very last commit**, Git offers a very easy way to do this:
```sh
git commit --amend --author="John Doe <john@doe.org>"
```

This effectively replaces the last commit with your "edited" version, correcting the wrong author information.

### Using Interactive Rebase

Interactive Rebase is the Swiss Army Knife of tools in Git: it allows you to do and change almost anything. However, being as powerful as it is, this also means you can very easily shoot yourself in the foot. Use it with care (and possibly [read up on it](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History#Changing-Multiple-Commit-Messages))!

The first step is to identify the last "good" commit and provide its hash to the rebase command:

```sh
$ git rebase -i -p 0ad14fa5
```

Your editor will open, requesting you to mark all the commits you want to change with the "edit" keyword.

Git will now walk you through each commit, giving you the chance to mold it as you desire:

```sh
Stopped at 5772b4bf2... Add images to about page
You can amend the commit now, with

    git commit --amend

Once you are satisfied with your changes, run

    git rebase --continue
```

Your job, now, is to **correct the author information** and then **continue to the next concerned commit** object until you've edited all the commits you just marked:

```sh
$ git commit --amend --author="John Doe <john@doe.org>" --no-edit
$ git rebase --continue
```

### Using git filter-branch

Another way is to use Git's "filter-branch" command. It allows you to batch-process a (potentially large) number of commits with a script.
You can run the below sample script in your repository (filling in real values for the old and new email and name):

```sh
$ git filter-branch --env-filter '
WRONG_EMAIL="wrong@example.com"
NEW_NAME="New Name Value"
NEW_EMAIL="correct@example.com"

if [ "$GIT_COMMITTER_EMAIL" = "$WRONG_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$NEW_NAME"
    export GIT_COMMITTER_EMAIL="$NEW_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$WRONG_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$NEW_NAME"
    export GIT_AUTHOR_EMAIL="$NEW_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
```

The same warning applies to this method as to the others mentioned: **you are rewriting history with this command**, creating new commit objects along the way!

Preferably, you should only do this in repositories that haven't been published / shared, yet. In any other case you should **use it with extreme care** - and only if you're aware of the side effects!

