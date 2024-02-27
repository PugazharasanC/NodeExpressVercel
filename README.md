# Deploying an Express.js Project to Vercel

This guide will walk you through deploying your Express.js project to Vercel, a cloud platform known for its user-friendly interface and robust deployment capabilities.

## Prerequisites

Before you get started, make sure you have the following:

- An existing Express.js project hosted on a Git repository (e.g., GitHub).
- Node.js installed on your local machine.
- A [Vercel account](https://vercel.com/). If you don't have one yet, you can sign up at [Vercel](https://vercel.com/).

## Deployment Steps

### Step 1: Prepare Your Project

Ensure your Express.js project is set up correctly locally. Create a `.gitignore` file in the root of your project to exclude unnecessary files from being included in version control.

### Step 2: Update Configuration Files

1. Add a `vercel.json` file to your project with the following content:

   ```json
   {
     "version": 2,
     "builds": [{ "src": "./index.js", "use": "@vercel/node" }],
     "routes": [{ "src": "/(.*)", "dest": "/" }]
   }
   ```

2. Update your `package.json` file to specify the Node.js version. First, check the current Node.js version installed on your system by running the following command in your terminal:

   ```sh
   node --version
   ```

   Then, update the `"engines"` section in `package.json` with the current Node.js version:

   ```json
   "engines": {
       "node" : "18.x"
   }
   ```

### Step 3: Deploy Your Project

1. **Log in to Vercel:** Visit [Vercel](https://vercel.com/) and log in to your account.

2. **Connect Your Project to Your Git Repository:**

   - Click on the "Import Project" button.
   - Select your Git provider (e.g., GitHub) and authenticate with your account if prompted.
   - Choose the repository that contains your Express.js project.

3. **Import Your Project into Vercel:**

   - After connecting your repository, Vercel will analyze your project and suggest settings based on its structure.
   - Review the suggested settings, such as framework presets and build commands, and make any necessary adjustments.
   - Click on the "Deploy" button to start the deployment process.

4. **Configure Environment Variables:**

   - If your Express.js project requires environment variables (e.g., database credentials), you can add them in the Vercel dashboard under the "Settings" tab for your project.
   - Click on "Environment Variables" and add key-value pairs for your variables.

5. **Deploy Your Project:**

   - Once your project is configured, click on the "Deploy" button to deploy it to Vercel.
   - Vercel will clone your Git repository, install dependencies, build your project (if necessary), and deploy it to a unique URL.
   - After deployment is complete, you'll receive a URL where your Express.js project is now live.

6. **Access Your Deployed Project:**
   - Visit the URL provided by Vercel in your browser to see your Express.js application running live.
   - You can also manage your deployment, view logs, and configure settings in the Vercel dashboard.

## Conclusion

Following these steps, your Express.js project is successfully deployed and accessible on Vercel. You can now share your project with others and manage it using Vercel's features.

For more advanced configurations and features, refer to the [Vercel documentation](https://vercel.com/docs).

If you are interested in hosting a React project on Vercel, check out the guide in [this repository](https://github.com/PugazharasanC/Node-React-Vercel).

## Like This Content?

If you found this guide helpful, consider starring this repository! ⭐️

For more guides and content like this, follow [my GitHub profile](https://www.github.com/PugazharasanC).
