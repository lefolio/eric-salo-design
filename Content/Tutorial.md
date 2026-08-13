Hi Eric, your site is ready for you to take ownership of and edit it as you wish.
The site is now hosted on GitHub Pages of the lefolio.md account:

https://github.com/lefolio/eric-salo-design

This tutorial will help you:
- transfer the site to your account on GitHub
- set up your tools on your computer so you can start editing content
- learn the basics of configuration with lefolio.md
- publish changes
- optionally change your URL.

Hope it goes smoothly for you! It's a bit of work, but you do it only once!

🧑‍💻 Feel free to take breaks and take it piece by piece; it's not very complex, but there's a bunch of new tools and concepts to learn, so it takes some time.
## Step 1: Take ownership of the code repository on GitHub

You first need to transfer the ownership to your GitHub account:
- Connect to GitHub
- Accept the ownership transfer for the site repository
- Navigate to the newly created repository in your account: https://github.com/ericsalodesign/eric-salo-design
- Click **Settings** on the top right.
- Navigate to **Pages**, click `Enable Pages`, and choose `GitHub Actions` in **Build and deployment**

✅ Your page should be live at https://ericsalodesign.github.io/eric-salo-design

![[1 - enable pages.png|423]]

## Step 2: Download the code and content on your Computer

This is the scariest part since it involves Git and potentially a terminal, but I try to make it as easy as possible:

- If you haven't installed Git on your machine, do it now: https://git-scm.com/
- Download and install [GitHub Desktop](https://desktop.github.com/download/); this will allow you to use Git without struggling with a terminal.
- Go to the repository's page and click the green **Code** button.
- Choose the "Open With GitHub Desktop" option.![[2 - Open with GitHub Desktop.png|400]]
- Follow the instructions from the app, and choose where you want to clone the code and content.![[3 - Choose Path.png|400]]
- Once it's done, click **Show in Explorer** to see the files where you wanted to put them.![[4 - Check Location.png|400]]



✅ Congratulations, the code and content are on your computer and synced with GitHub!
## Step 3: Set up your Obsidian Environment and start editing!

This is where the fun stuff starts! Just a few more tools to install before you can start playing.

- Install [Obsidian](https://obsidian.md/)
- Start Obsidian and choose **Open Vault**
- Choose the **Open Folder as Vault**
- Choose the folder where you previously cloned the code and content.
- Watch the guided tour video to get an overview of the content and how to edit it.

![](https://youtu.be/YjB5KjUDaXM)


✅ You have Obsidian installed with your project available and you know more about how editing works!

## Step 4: Final setup with plugins (Optional but recomended)

We continue with the setup of Obsidian! Obsidian is also great because it can be extended so we can turn it into a full web editing station; this, however, requires installing a few plugins, and I'm building a plugin for Obsidian that will make things smoother, but it's still in development.

- First, if you want to understand more, watch the short video where I explain why we use plugins.
- Open the Obsidian Settings.
- Navigate to **Community Plugins** on the left.
- Press **Enable Community Plugins**.
- You can click **Browse** to seach for plugins and install them, but for now you can just intall a few plugins:
- Install and enable the [BRAT plugin](obsidian://show-plugin?id=obsidian42-brat), that allows you to install beta plugins
- Install the **lefolio** plugin through BRAT: 
	- In Obsidian, press `CTRL+P` to open the command panel
	- Type "brat add", and choose "Add a beta plugin..."![[6 - brat.png]]
	- Copy the plugin URL: https://github.com/lefolio/obsidian-plugin
	- and press **Add Plugin**
- Install and enable the [Terminal Plugin](obsidian://show-plugin?id=terminal)
- Install and enable the [Yaml Editor Plugin](obsidian://show-plugin?id=yaml-editor)

✅ Your setup is ready for optimal comfort in Obsidian!

## Step 5: Run the development server to preview your changes
## Step 6: Publish changes
Let's make some changes and push them to the repo to get the full experience.
Suggestion: remove the Tutorial page.

To remove the Tutorial page:
- delete the Turorial file, and the images in Assets/
- Remove the line `Tutorial` from `config.yaml`
```yaml
navigation:
  - Men: "https://ericsalodesign.com/pages/men"
  - Women: "https://ericsalodesign.com/pages/women"
  - New Arrivals: "https://ericsalodesign.com/collections/all"
  - Sale: "https://ericsalodesign.com/collections/all-on-sale"
  - Blog
  - Tutorial # <---- Remove this line
```

The `Tutorial` link should disapear from the site navigation if you have your preview running.