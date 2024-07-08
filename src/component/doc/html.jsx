const HTMLPage = [
  {
    id: 1,
    title: "HTML Introduction",
    path: "/html-introduction",
    content:
      "# HTML Introduction \n\n HTML is the standard markup language for Web pages. \n\n With HTML you can create your own Website. \n\n HTML is easy to learn -\n ## Example \n\n```shell\n<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n</body>\n</html>\n\n```\n\nYou will see something similar to:\n\n```shell\nready - started server on 0.0.0.0:3000, url: http://localhost:3000\ninfo  - automatically enabled Fast Refresh for 1 custom loader\nevent - compiled successfully in 4.7s (1535 modules)\n```\n\nThis runs the app in development mode. Open [localhost:3000](http://localhost:3000) to view it in\nthe browser.\n\nWhile in development mode, the page will automatically reload if you make changes to the code.\nShould you have any, you will see the build errors and lint warnings in the console.\n\nThe app uses `ESLint`, so you will get detailed warnings and errors as well as best practice hints.\n\n## Build project files\n\n```shell\nnpm run build\n```\n\nor `yarn build`\n\nBuilds the app for production to the build folder. It correctly bundles React in production mode and\noptimizes the build for the best performance.\n\nThe build is minified, and the filenames include hashes.\n\nIf you have made your necessary changes, by this time, your app should ready to be deployed.\n\n> Please keep in mind that this project **_does not_** handle any backend logic nor databases; it is just a frontend you can use\n> it with any backend you want. This means that you will have to build such a backend or use any existing one you might\n> already have.\n",
  },
  {
    id: 2,
    title: "HTML Editors",
    path: "/html-editors",
    content:
      "# HTML Editors\n\n\n\nThe app is built using the latest trends with periodic updates. The optional dependencies are used to create app features. If you do not need a feature, please remove the dependency to keep the project files clean and reduce dependency download and install time.\n ## Important dependencies \n\n - `@emotion/cache - Styling` \n\n - `@emotion/react - Styling` \n\n - `@emotion/styled - Styling` \n\n - `@mui/icons-material - MUI icons` \n\n - `@mui/lab - Base theme components` \n\n - `@mui/material - Base theme components` \n\n - `@mui/system - Base theme system utilities` \n\n - `date-fns - Utils to parse date and time` \n\n - `react - Core` \n\n - `next - Core` \n\n - `stylis - Styling` \n\n - `stylis-plugin-rtl - Styling`, \n\n\n ##Optional dependencies, \n\n - `@auth0/auth0-spa-js - Handle Auth0 authentication`, \n\n - `@fullcalendar/core - Calendar`, \n\n - `@fullcalendar/daygrid - Calendar`, \n\n - `@fullcalendar/interaction - Calendar`, \n\n - `@fullcalendar/list - Calendar`, \n\n - `@fullcalendar/react - Calendar`, \n\n - `@fullcalendar/timegrid - Calendar`, \n\n - `@fullcalendar/timeline - Calendar`, \n\n - `@react-pdf/renderer - Render invoice`, \n\n - `@reduxjs/toolkit - Utilities for Redux`, \n\n - `apexcharts - Create charts`, \n\n - `aws-amplify - Handle Amplify authentication`, \n\n - `firebase - Handle Firebase authentication`, \n\n - `formik - Handle form and input events`, \n\n - `gray-matter - Parse docs markdown files`, \n\n - `i18next - Internationalization framework`, \n\n - `nprogress - Display page loading progress bar`, \n\n - `numeral - Utility to format numbers`, \n\n - `prop-types - Add prop type schema for components`, \n\n - `react-apexcharts - Chart components built over apexcharts library`, \n\n - `react-beautiful-dnd - Enable drag and drop functionality for Kanban`, \n\n - `react-dropzone - Drop zone functionality for FileDropzone component`, \n\n - `react-hot-toast - Display and manage notifications`, \n\n - `react-i18next - React wrapper over i18next library`, \n\n - `react-markdown - Parse markdown in html elements`, \n\n - `simplebar - Replace browser scrollbar with custom component`, \n\n - `simplebar-react - Simplebar React wrapper`, \n\n - `react-quill - Text editor alternative`, \n\n - `react-redux - React components for Redux`, \n\n - `react-syntax-highlighter - Highlight markdown code`, \n\n - `redux-devtools-extension - Display Redux State and Actions in devtools`, \n\n - `redux-thunk - Middleware to enable Redux async actions`, \n\n - `redux - State manager for Calendar, Chat, Kanban, and Mail apps`, \n\n - `yup - Validation library` ",
  },
  {
    id: 3,
    title: "HTML Basics",
    path: "/html-basics",
    content:
      "# HTML Basics Variables\n\n\n\nBy default, Next.js compiler looks for .env file in projects root folder and reads its content. \n\n\n ###Loading Environment Variables \n\nNext.js has built-in support for loading environment variables from .env file into process.env. \n\n\n An example .env: \n\n```shell\nDB_HOST=localhost\nDB_USER=myuser\nDB_PASS=mypassword\n```\n\n\n This loads process.env.DB_HOST, process.env.DB_USER, and process.env.DB_PASS into the Node.js environment automatically allowing you to use them in Next.js data fetching methods and API routes. \n\n\n For example, using getStaticProps: \n\n```shell\n// pages/index.js\n\n```\n\n\n##Exposing Environment Variables to the Browser\n\n\nBy default environment variables are only available in the Node.js environment, meaning they won't be exposed to the brows\n\nIn order to expose a variable to the browser you have to prefix the variable with NEXT_PUBLIC_. For example:\n\n```shell\nNEXT_PUBLIC_ANALYTICS_ID=abcdefghijk```\n\n <span className='bar'></span>  WARNING: Do not store any secrets (such as private API keys or passwords) in the public variables! These environment variables are <span className='bar'></span>  embedded into the build, meaning anyone can view them by inspecting your app's files. \n\n\n\n\n\n\n\n\n\n\n\n\n\n## Private Variables \n\n Having access to the NODE_ENV is also useful for performing actions conditionally:\n\n```shell\n how are you```\n\n Read more about environment variables here",
  },
  {
    id: 4,
    title: "HTML Elements",
    path: "/html-elements",
    content: ` # HTML Elements \n ## Node.js Server \n Next.js can be deployed to any hosting provider that supports Node.js. Make sure your package.json has the \"build"\ and \"start"\ scripts:

  {
    "scripts": {
      "dev": "next",
      "build": "next build",
      "start": "next start"
    }
  }
  
  \n\n\n  builds the production application in the .next folder. After building, next start starts a Node.js server that supports hybrid pages, serving both statically generated and server-side rendered pages.\n ## Static HTML Export
  \n\n\n\n Next export allows you to export your app to static HTML, which can be run standalone without the need of a Node.js server.
  \n\n\n\n The exported app supports almost every feature of Next.js, including dynamic routes, prefetching, preloading and dynamic imports.
\n ## Vercel Deployment
  \n\n\n\n The easiest way to deploy Next.js to production is to use the Vercel platform from the creators of Next.js. Vercel is a cloud platform for static sites, hybrid apps, and Serverless Functions. Read more about it from official docs
  `,
  },

  {
    id: 5,
    title: "HTML Attributes",
    path: "/html-attributes",
    content:
      "# HTML Attributes \n\n Next.js has a file-system based router built on the concept of pages.\n\n When a file is added to the pages directory it's automatically available as a route.\n\n The files inside the pages directory can be used to define most common patterns\n\n\n##Index routes \n\n\n\n The router will automatically route files named index to the root of the directory.\n\n - `pages/index.js → /` \n\n - `pages/index.js → /` \n\n\n\n\n\n##Nested routes \n\n\n\n The router supports nested files. If you create a nested folder structure files will be automatically routed in the same way still.\n\n - `pages/blog/first-post.js → /blog/first-post` \n\n - `pages/dashboard/settings/username.js → /dashboard/settings/username` \n\n\n\n\n\n\n\n ##Dynamic route segments \n\n\n\n Defining routes by using predefined paths is not always enough for complex applications. In Next.js you can add brackets to a page ([param]) to create a dynamic route (a.k.a. url slugs, pretty urls, and others)",
  },
  {
    id: 6,
    title: "HTML Paragraphs",
    path: "/html-paragraphs",
    content:
      "# HTML Paragraphs \n\n\n MUI offers a utility function: createTheme() that creates a theme which can be passed to the theme provider; \n\n Otherwise the theme provider uses the default theme. The theme provider makes the theme available in the component tree, and can be used via the sx prop, or inside styled components using the MUI styled engine (styled). \n\n\n\n\n\n\n\n ##Creating a theme \n\n\n The app allows you to choose between multiple theme setups, thus a wrapper was created over the createTheme. Currently, the function accepts a configuration object with the following keys: \n\n - `direction [ 'ltr' | 'rtl' ] - Sets the text direction. If you need RTL support, please ensure you use RTL component.` \n\n - `responsiveFontSizes [ boolean ] - Adaptive font size for small devices.` \n\n - `mode [ 'light' | 'dark' ] - Select a specific theme configuration. You can add your own styling or adjust current options.` \n\n\n ```shell \n // src/pages/index.js \n import { ThemeProvider } from '@mui/material/styles'; \n import { createTheme } from '../theme'; \n\n const Home = () => { \n         const theme = createTheme({ \n               direction: 'ltr', \n               responsiveFontSizes: true, \n               paletteMode: 'dark' \n          }); \n\n           return ( \n                <ThemeProvider theme={theme}> \n                       <div> content </div> \n                 </ThemeProvider> \n            ); \n } ``` \n\n\n ##Nested themes \n\n Multiple themes can be nested. The app implements this behaviour to display the components on light/dark palette mode without changing the app global theme. ",
  },
  {
    id: 7,
    title: "HTML Styles",
    path: "/html-styles",
    content: `# HTML Styles

  \n\n\n Redux is more robust alternative for state management, that offers more helpful features out of the box. Follow the official documentation to understand the entire concept behind it.
  
  \n\n\n ##Usage
  \n\n The app uses Redux Toolkit with hooks (Thunk method, not Sagas) to manage the state for Calendar, Chat, Kanban and Mail apps.
  \n This can be replaced with Context API, or any other system, in a matter of hours due the clean structure of the project.
  \n\n The app at hand uses Redux, but you can find Context API examples in the project. You can also opt for Recoil, maintained by Facebook, a new alternative that allows you to split the state in multiple "atoms". An example is not included, but the ones from Facebook documentation should be simple enough to use in your project.

  ## How to use
  \n\n There are 2 main folders:
      \n\n 1. src/slices where you can find the implementation of the reducer logic.
      \n\n 2. src/store which exports a store and combines the reducers in one root reducer.
  \n\n\n If you're new to Redux Toolkit, please read their official documentation to understand the basics.
  <br/>
  <br/>
  <br/>
  ## Example
  \n\n\n You can take as an example the blog feature of this app where; should you want to implement Redux; you can do it as follows:
  <br/>
  <br/>
  ## Create a new slice
  \n\n\ Create a new file in src/slices, and name it blog.js. Now open this new file with your favorite IDE, and import createSlice from @reduxjs/toolkit package to create the new slice.

  \`\`\`JavaScript
  import { createSlice } from '@reduxjs/toolkit';

  const initialState = {
    articles: []
  };

  const slice = createSlice({
    name: 'blog',
    initialState,
    reducers: {}
  });

  export const { reducer } = slice;

  export default slice;
  \`\`\`
  \n\n It is important to assign a name to the slice and an initial state.
  <br/>
  <br/>
  ##Create a reducer action
  \n Let's get back to the newly created slice and add a setArticles action.

  \`\`\`javascript
  const slice = createSlice({
      name: 'blog',
      initialState,
      reducers: {
        setArticles(state, payload) {
            // You should get articles from the action payload.
            // For simplicity's sake let's use static data instead.
            
            state.articles = [
              {
                 id: '1',
                 title: 'My first article'
              }
            ];
        }
      }
  });
  \`\`\`
  `,
  },
  {
    id: 8,
    title: "HTML Formatting",
    path: "/html-formatting",
    content: `# HTML Formatting
  \n\n The application simulates all server calls using in memory data storage. This can be easily modified to connect to any server.
  \n\n\n You can use any library you like. Most apps use Axios since it allows you to create instances, attach interceptors, and many other features. Another good alternative could be Fetch.
  <br/>
  <br/>
  ## Example of current implementation
  \n\n \`\`\`JavaScript
  class CustomerApi {
    getCustomers() {
      return Promise.resolve([
        {
          id: '238339KDC',
          name: 'John'   
        }
      ]);
    }
  };
  
  const customerApi = new CustomerApi();
  
  const Page = () => {
    const [customers, setCustomers] = useState(null);
  
    useEffect(() => {
      const getCustomers = async () => {
        const result = await customerApi.getCustomers();
        setCustomers(result);
      };
  
      getCustomers();
    }, []);
  
    return (
      <div>
        {/* render content */}
      </div>
    );
  };
  \`\`\` \n\n
  The customerApi is a singleton class instance that simply responds with a Promise. You can add as many requests methods as you need, test request structure or even use as middleware between UI and server request to process your input and output data
  <br/>
  <br/>
  ## Example with Fetch
  \n\n \`\`\`JavaScript
  const Page = () => {
    const [customers, setCustomers] = useState(null);
  
    useEffect(() => {
      const getCustomers = async () => {
        const response = await fetch('/api/customers');
        const data = await response.json();
        setCustomers(data);
      };
  
      getCustomers();
    }, []);
  
    return (
      <div>
        {/* render content */}
      </div>
    );
  };
  \`\`\` \n\n
  <br/>
  ## Example with Axios
  \n\n \`\`\`JavaScript
  import axios from 'axios';  // You need to install it

  const Page = () => {
    const [customers, setCustomers] = useState(null);

    useEffect(() => {
      const getCustomers = async () => {
        const response = await axios.get('/api/customers');
        setCustomers(response.data);
      };

      getCustomers();
    }, []);

    return (
      <div>
        {/* render content */}
      </div>
    );
  };
  \`\`\`
  <br/>
  ## Axios Request interceptors
  \n\n By using Axios you are able to integrate Axios Mock Adapter to simulate real server calls. To archive that, you have to create an Axios instance and use it whenever you make a request call. Now you can extend your instance and add Axios Mock Adapter to listen for requests and return custom data.
  <br/>
  <br/>
  <br/>
  ## Adding request interceptors
  \n\n It takes ony a few seconds to add a new http request listener. The interceptor has a similar format to Express JS, for example:
  \n\n \`\`\`JavaScript
  import axios from 'axios';  // You need to install it
  import AxiosMockAdapter from 'axios-mock-adapter';  // You need to install it

  export const axiosInstance = axios.create();

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
  );

  const mock = new AxiosMockAdapter(axiosInstance, {delayResponse: 0});

  mock.onGet('/__fake-api__/invoices').reply(200, {
    invoices: [
      {id: 1, total: 32.43},
      {id: 2, total: 67.00}
    ]
  });
  \`\`\`
  `,
  },
  {
    id: 9,
    title: "HTML Quotations",
    path: "/html-quotations",
    content: ` # HTML Quotations
  \n\n It is important for your customers to have some control over the app interface. To make that possible you need a way to let the app know which are the user preferences. In order to achieve it, the app uses a context that can make its data available in the entire component tree for usage and control.
  \n\n Currently, the app allows you to control the theme, and you can choose between available options, toggle RTL (right-to-left text direction). This is a simple implementation to give you an idea on how can the configurations be made. It might be in your best interest to adjust it to your business needs. You might want to have a specific app interface, and allow other setup options, or remove some of the existing ones.
  <br/>
  <br/>
  ## How it works 
  \n\n \`\`\`JavaScript
  // src/pages/_app.js
  import { SettingsProvider } from '../contexts/settings-context';

  const App = (props) => {
    const { Component, pageProps } = props;
      
    return (
      <SettingsProvider>
        <Component {...pageProps} />
      </SettingsProvider>
    );
  };
  \`\`\`
  The content of the App component is wrapped with the SettingsProvider, and by doing this its context data is made available inside the component tree.
  <br/>
  <br/>
  <br/>
  ## How to use
  \n\n There are two methods, using the hook or the context consumer.
  \n\n \`\`\`JavaScript
  // src/pages/index.js
  import { useSettings } from '../hooks/useSettings';

  const Page = () => {
    const settings = useSettings();

    return (
      <div>
        Current theme: {settings.paletteMode}
      </div>
    );
  };
  \`\`\` \n\n
  \`\`\`JavaScript
  // src/pages/index.js
  import { SettingsConsumer } from '../contexts/settings-context';

  const Page = () => {
    return (
      <SettingsConsumer>
        {(settings) => (
          <div>
            Current theme: {settings.paletteMode}
          </div>
        )}
      </SettingsConsumer>
    );
  };
  \`\`\` \n\n
    `,
  },
  {
    id: 10,
    title: "HTML Comments",
    path: "/html-comments",
    content: ` # HTML Comments
  \n\n Text direction is extremely important for cultures where "right-to-left" writing is used. The app has this functionality implemented.
  <br/>
  <br/>
  ## How it works
  \n\n The wrapper component, RTL, is necessary to be above the app content in the tree. The component changes the document direction, and appends a stylis plugin which converts all component styles to mirror the margins and paddings.
  \n\n \`\`\`JavaScript
  // src/pages/_app.js
  const App = (props) => {
    const { Component, pageProps } = props;
      
    return (
      <RTL direction="rtl">
        <Component {...pageProps} />
      </RTL>
    );
  };
  \`\`\`
  \n\n direction prop can be "ltr" or "rtl". When using "ltr" the component simply renders the children, without affecting the styling.
  <br/>
  <br/>

  ## Removing RTL support
  \n\n If you do not need to support RTL, you can remove it by following the next steps.
  \n\n 1. Remove RTL component from src/components.
  \n\n 2. Remove RTL component import and usage from App component.
  \n\n 3. Uninstall the @emotion/cache andstylis-plugin-rtl dependencies.
  `,
  },
  {
    id: 11,
    title: "HTML Colors",
    path: "/html-colors",
    content: ` # HTML Colors
  \n\n Supporting multiple languages may represent an important feature for your app. To have this enabled the app uses i18next framework. Read more about it here.
  <br/>
  ## How it works
  \n\n You might need to change all instances of inline text in any components to be wrapped with the t() function as presented below.
  \n\n The library needs a configuration and initialization file, in this case, src/i18n.js file.
  \n\n First step is to declare the app translations as resources.
  \n\n \`\`\`JavaScript
  const resources = {
    en: {
      translation: {
        'Welcome to React': 'Welcome to React and react-i18next'
      }
    },
    fr: {
      translation: {
        'Welcome to React': 'Bienvenue à React et react-i18next'
      }
    },
    es: {
      translation: {
        'Welcome to React': 'Bienvenido a React and react-i18next'
      }
    },
    // ...
  };
  \`\`\` \n\n
  These translations need to be passed in the i18n.init() function to make them available inside App components tree using the useTranslation hook.
  \n\n \`\`\`JavaScript
  // src/pages/index.js
  import { useTranslation } from 'react-i18next';

  const Page = () => {
    const { t } = useTranslation();

    return (
      <h1>
        {t('Welcome to React')}
      </h1>
    );
  };
  \`\`\` \n\n
  For all configuration options, please follow the official documentation.
  <br/>
  <br/>
  ## Removing internationalization support
  \n\n 1. Remove import './i18n line from App component.
  \n\n 2. Remove i18n.js configuration file from src folder.
  \n\n 3. Remove LanguagePopover component since it connects with the library.
  \n\n 4. Uninstall i18next and react-i18next dependencies.
    `,
  },
  {
    id: 12,
    title: "HTML Images",
    path: "/html-images",
    content: ` # HTML Images
  \n\n AWS Amplify is a set of services accompanied by various tools and libraries created to help the development of apps. Their suite offers among other features, an authentication feature, which can be used as a stand-alone authentication system. The project is able to be used with this authentication system, as well. Should you want to implement any of the other features Amplify offers, you can refer to their documentation.
  <br/>
  <br/>
  ## Set up your Amplify account
  \n\n The documentation for this, can be found in the official documentation of the service, mentioned above.
  <br/>
  <br/>
  ## Configuration
  \n\n In order to configure Amplify client library you have to open (or create) .env file in the project's root folder and set the following variables as presented in your Amplify account settings:
  \n\n \`\`\`JavaScript
  NEXT_PUBLIC_AWS_COGNITO_IDENTITY_POOL_ID=
  NEXT_PUBLIC_AWS_COGNITO_REGION=
  NEXT_PUBLIC_AWS_PROJECT_REGION=
  NEXT_PUBLIC_AWS_USER_POOLS_ID=
  NEXT_PUBLIC_AWS_USER_POOLS_WEB_CLIENT_ID=
  \`\`\` \n\n
  If you do not want to set up environment variables, settings can be applied simply on the amplifyConfig object found in the src/config.js file.
  \n\n \`\`\`JavaScript
  export const amplifyConfig = {
    aws_project_region: '',
    aws_cognito_identity_pool_id: '',
    aws_cognito_region: '',
    aws_user_pools_id: '',
    aws_user_pools_web_client_id: ''
  };
  \`\`\` \n\n
  <br/>
  ## How it was implemented
  \n\n As mentioned above, Amplify offers a set of components to help your development process, although they're not used in the app.
  \n The Auth singleton from the library is used to provide the authentication feature to a context ( which wraps the content of the App component).
  \n This aforementioned context is then used in the component tree to access the Auth public methods. It provides the user authentication status and user profile, if available.
  <br/>
  <br/>
  ## How to use Amplify Provider
  \n\n By default, the project uses a mocked JWT provider (as in: it doesn't use an actual JWT based authentication server). To make use of Amplify simply follow these steps:
  <br/>
  <br/>
  ## Step 1. Replace the provider and consumer
  \n\n Open src/pages/_app.js file and replace the following line:
  \n\n \`\`\`JavaScript
  import { AuthConsumer, AuthProvider } from '../contexts/auth/jwt-context';
  \`\`\` \n\n
  with
  \n\n \`\`\`JavaScript
  import { AuthConsumer, AuthProvider } from '../contexts/auth/amplify-context';
  \`\`\` \n\n
  Do continue.........
    `,
  },
  {
    id: 13,
    title: "HTML Form Attributes",
    path: "/html-form-attributes",
    content: ` # HTML Form Attributes
  \n\n Auth0 is an easy to implement, adaptable authentication and authorization platform. Auth0 provides a library built for React, but the app uses a more generic library designed for universal SPAs. This gives you more control over the components, as the app needs to provide support for multiple authentication providers. You can refer to their documentation as you deem fit, or in case you need things not covered in the app.
  <br/>
  <br/>
  ## Set up your Auth0 account
  \n\n The documentation for this, can be found in the official documentation of the service, mentioned above.
  <br/>
  <br/>
  ## Configuration
  \n\n To configure Auth0 client library you have to open (or create) .env file in the project's root folder and set the following variables as presented in your Auth0 account settings:
  \n\n \`\`\`JavaScript
  NEXT_PUBLIC_AUTH0_BASE_URL=  # http://localhost:3000 or your website base URL
  NEXT_PUBLIC_AUTH0_CLIENT_ID=  # your Auth0 application client ID
  NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL=  # your Auth0 tenant domain
  \`\`\` \n\n
  If you do not want to set up environment variables you can simply set the auth0Config object from src/config.js file.
  \n\n \`\`\`JavaScript
  export const auth0Config = {
    base_url: '',
    client_id: '',
    issuer_base_url: ''
  };
  \`\`\` \n\n
  <br/>
  ## How it was implemented
  \n\n As mentioned, Auth0 offers a set of components to help your development process, although they're not used in the app.
  \n\n The Auth0Client class from the library is used to provide the authentication feature to a context (which wraps the content of the App component).
  \n\n This aforementioned context is then used in the component tree to access the Auth0Client instance public methods. It provides the user authentication status and user profile, if available.
  <br/>
  <br/>
  ## How to use Auth0 Provider
  \n\n By default, the project uses a mocked JWT provider (as in: it doesn't use an actual JWT based authentication server). To make use of Amplify simply follow these steps:
  <br/>
  <br/>
  ## Step 1. Replace the provider
  \n\n Open src/pages/_app.js file and replace the following line:
  \n\n \`\`\`JavaScript
  import { AuthConsumer, AuthProvider } from '../contexts/auth/jwt-context';
  \`\`\` \n\n
  with
  \n\n \`\`\`JavaScript
  import { AuthConsumer, AuthProvider } from '../contexts/auth/auth0-context';
  \`\`\` \n\n
  <br/>
  ## Step 2. Replace the hook context
  \n\n Open src/hooks/use-auth.js file and replace the following line:
  \n\n \`\`\`JavaScript
  import { AuthContext } from '../contexts/auth/jwt-context';
  \`\`\` \n\n
  with
  \n\n \`\`\`JavaScript
  import { AuthContext } from '../contexts/auth/auth0-context';
  \`\`\` \n\n
  <br/>
  ## How to use auth
  \n\n be continue....
    `,
  },
  {
    id: 14,
    title: "HTML Input Types",
    path: "/html-input-types",
    content: `# HTML Input Types
  \n\n Firebase is a complete set of solutions, from Analytics to Cloud Functions. In the app at hand, only the authentication service is used, although you can decide to use more of their features. Please refer to their documentation as you deem necessary
  <br/>
  <br/>
  ## Set up your Firebase account
  \n\n The documentation for this, can be found in the official documentation of the service, mentioned above.
  <br/>
  <br/>
  ## Configuration
  \n\n To configure Firebase client library you have to open (or create) .env file in the project's root folder and set the following variables as presented in your Firebase account settings:
  \n\n \`\`\`JavaScript
  NEXT_PUBLIC_FIREBASE_API_KEY=
  NEXT_PUBLIC_FIREBASE_APP_ID=
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
  NEXT_PUBLIC_FIREBASE_DATABASE_URL=
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
  NEXT_PUBLIC_FIREBASE_PROJECT_ID=
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
  \`\`\` \n\n
  If you do not want to set up environment variables, settings can be applied simply on the firebaseConfig object found in the src/config.js file.
  \n\n \`\`\`JavaScript
  export const firebaseConfig = {
    apiKey: '',
    appId: '',
    authDomain: '',
    messagingSenderId: '',
    projectId: '',
    storageBucket: ''
  };
  \`\`\` \n\n
  <br/>
  ## How it was implemented
  \n\n As mentioned above, Firebase offers a set of components to help your development process, although they're not used in the app.
  \n\n The firebase.auth factory from the library is used to create and provide the authentication feature to a context (which wraps the content of the App component).
  \n\n This aforementioned context is then used in the component tree to access the Auth public methods. It provides the user authentication status and user profile, if available.
  <br/>
  <br/>
  ## How to use Firebase Auth Provider
  \n\n By default, the project uses a mocked JWT provider (as in: it doesn't use an actual JWT based authentication server). To make use of Amplify simply follow these steps:
  <br/>
  ## Step 1. Replace the provider
  \n\n Open src/pages/_app.js file and replace the following line:
  \n\n \`\`\`JavaScript
  import { AuthConsumer, AuthProvider } from '../contexts/auth/jwt-context';
  \`\`\` \n\n
  with
  \n\n \`\`\`JavaScript
  import { AuthConsumer, AuthProvider } from '../contexts/auth/firebase-context';
  \`\`\` \n\n
  <br/>
  ## Step 2. Replace the hook context
  \n\n Do continue..........
    `,
  },
  {
    id: 15,
    title: "HTML Form Elements",
    path: "/html-form-elements",
    content: ` # HTML Form Elements
  \n\n Most auth providers use this strategy under the hood to provide access tokens. Currently, the app doesn't cover the backend service, and this service is mocked (faked) using http client interceptors. The implementation is basic, but enough to give you a starting point.
  <br/>
  <br/>
  ## How it was implemented
  \n\n Since tokens are meant to be created on the backend server, they are built with encrypt, encode and decode utility methods because they are not meant to be used on the client. These utilities can be found in src/utils/jwt. These are for development purposes only, and you must remove (or avoid using) them.
  <br/>
  <br/>
  <br/>
  ## How to use JWT Provider
  \n\n The app is delivered with JWT Provider as default auth strategy. If you changed or removed it, and you want it back, simply follow these steps:
  <br/>
  <br/>
  ## Step 1. Import the provider
  \n\n Open src/pages/_app.js file, import the provider and wrap the App component with it.
  \n\n \`\`\`JavaScript
  // src/pages/_app.js
  import { AuthConsumer, AuthProvider } from '../contexts/auth/jwt-context';

  const App = (props) => {
    const { Component, pageProps } = props;
      
    return (
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    );
  };
  \`\`\` \n\n
  <br/>
  ## Step 2. Set the hook context
  \n\n Open src/hooks/use-auth.js file and replace the current context the following line:
  \n\n \`\`\`JavaScript
  import { AuthContext } from '../contexts/auth/jwt-context';
  \`\`\` \n\n
  <br/>
  ## How to use auth
  <br/>
  ## Retrieve user profile
  \n\n In the example below, you can find how it can be used in any component not just the App. Should you want to use it in any other component, you'll have to import the useAuth hook and use it as needed.
  \n\n \`\`\`JavaScript
  // src/pages/index.js
  import { useAuth } from '../hooks/use-auth';

  const Page = () => {
    const { user } = useAuth();

    return (
      <div>
        Email: {user.email}
      </div>
    );
  };
  \`\`\` \n\n
  <br/>
  ## Auth methods / actions
  \n\n For simplicity and space limitations, the code below is used only to exemplify, actual code can be found in the components.
  \n\n \`\`\`JavaScript
  // src/pages/index.js
  import { useAuth } from '../hooks/use-auth';

  const Page = () => {
    const { login } = useAuth();
    
    const handleLogin = () => {
      // Email/username and password
      login('demo@devias.io', 'Password123!');
    };

    return (
      <div>
        <button onClick={handleLogin}>
          Login
        </button>
      </div>
    );
  };
  Implemented fl
  \`\`\` \n\n
  <br/>
  ## Implemented flows
  \n\n Currently, the app only covers the main flows:
  \n\n - Register
  \n\n - Login
  \n\n - Logout
  `,
  },
  {
    id: 16,
    title: "HTML Input Elements",
    path: "/html-input-elements",
    content: ` # HTML Input Elements
  \n\n There are some situations when you want to make a route visible exclusively for users that are not authenticated, such as /authentication/register, /authentication/login, etc.
  \n\n For such situations, the app provides you with a sample GuestGuard component that can be used to make redirect the user to a certain route (currently /dashboard). Should you want to modify said route you can do so by modifying the GuestGuard component. There was no need to make a more complex logic for this GuestGuard component, as the business logic needed for your specific app might need a different approach regardless.
  \n\n To be able to prevent the entire page render, the app provides a simple hoc utility that wraps the page with the GuestGuard.
  <br/>
  <br/>
  ## Example
  \n\n \`\`\`JavaScript
  // src/pages/authentication/login.js
  import { withGuestGuard } from '../../hocs/with-guest-guard';

  const Login = () => {
    return (
      <div>
        content
      </div>
    );
  };

  export default withGuestGuard(Login);
  \`\`\` \n\n
  <br/>
  ## How it works
  \n\n It connects with the authentication provider (Amplify, Auth0, Firebase, or JWT, depending on your setup) and extracts the required data to detect whether it can render the children passed as props, otherwise it redirects the user to the /dashboard route.
    `,
  },
  {
    id: 17,
    title: "HTML Canvas",
    path: "/html-canvas",
    content: `# HTML Canvas
  \n\n This is a simple component that can be used to protect a private route. It controls whether it should allow navigation to a requested route based on given context. Similar to the GuestGuard, the app provides a hoc to prevent the entire page render.
  <br/>
  <br/>
  ## Example
  \n\n \`\`\`JavaScript
  // src/pages/dashboard/index.js
  import { withAuthGuard } from '../../hocs/with-auth-guard';

  const Overview = () => {
    return (
      <div>
        content
      </div>
    );
  };

  export default withAuthGuard(Overview);
  \`\`\` \n\n
  <br/>
  ## How it works
  \n\n It connects with the authentication provider (Amplify, Auth0, Firebase, or JWT, depending on your setup) and extracts the required data to detect whether it should render the children passed as props, otherwise it redirects to the Login component with a redirect url query string parameter to allow the Login component to redirect back to the requested url after a successful authentication.
  <br/>
  <br/>
  ## How it can be extended
  \n\n As mentioned, this is a sample component, thus it can and should be adjusted to match your business needs.`,},
  {
    id: 18,
    title: "HTML SVG",
    path: "/html-svg",
    content: `# HTML SVG
  \n\n Many apps have complex user interfaces and flows. Some might have a list of routes for specific user roles or rights, such as admin, editor, content manager, etc, or even display a completely different interface for the same route. If that's the case for your project, you may want to check whether the user is authenticated their Access Control List (ACL) This depends a lot on your business, and your chosen ACL implementation / provider.
  \n\n Guarding is a concept that usually refers to route protection, but it can also be applied to components, and instead of redirecting the user to another route, you can render a different component.
  <br/>
  <br/>
  ## How it can be implemented
  \n\n This guard is not created as there's no real way to know the actual business case, the needs, or the strategy used in your specific app. Meanwhile, there are some standardized ACL strategies, there are still too many of them and picking one is not fathomable in any way.
  \n\n As an effect you can find below a suggestion on how it could be implemented, should you want it.
  \n\n In situations where various rights determine bits of the same UI, you may want to change the redirection to either only display the functionality as disabled or simply not display it. The conditional rendering scenario is a much easier one.
  \n\n \`\`\`JavaScript
  const RoleBasedGuard = (props) => {
    const { children, permissions } = props;
    const { user } = useAuth();
    
    // Here check the user permissions
    const canView = true;
    
    if (!canView) {
      return null;
    }
  
    return <>{children}</>;
  };
  
  const Overview = () => {
    return (
      <div>
        <RoleBasedGuard permissions={['article/edit']}>
          <div>
            <button>
              Edit
            </button>
          </div>
        </RoleBasedGuard>
        <ArticleContent />
      </div>
    );
  };
  \`\`\` \n\n
    `,
  },
  {
    id: 19,
    title: "HTML Video",
    path: "/html-video",
    content: `# HTML Video
  \n\n For many companies is important to understand the user traffic, origin and behaviour. This may apply to your business, and you can find an example in the app.
  <br/>
  <br/>
  <br/>
  ## Google Tag Manager (GTM)
  \n\n In previous versions the app used Google Analytics directly, but for this version it uses GTM. This enables a lot more control over the analytics implementation and also helps you display things like GDPR modal, various targeted content; control the data transfer, cookies and other aspects based on user data privacy preferences. Read more about GTM here.
  <br/>
  <br/>
  ## How GTM it works
  \n\n In order to use the GTM platform you set up a container, then you create a tag for each provider you need, for example, Google Analytics. Then, using the triggers, you control multiple tags based on data pushed to the data layer. The data pushed gets computed on the client (browser), and then the library determines which tags will be loaded.
  <br/>
  <br/>
  ## How is it implemented
  \n\n The app uses a small singleton class to help with loading the GTM library, initialize it and track events via the GTM available methods.
  `,
  },
  {
    id: 20,
    title: "HTML Audio",
    path: "/html-audio",
    content: `# HTML Audio
  <br/>
  ## Create GTM account
  \n\n In order to use the GTM platform, you need to create a GTM account. Read more about it here.
  <br/>
  <br/>
  ## Set up configuration options
  \n\n The app uses environment variables because it can be deployed with different accounts for development, qa, and production. This allows you to configure the GTM library differently for each environment.
  \n\n Open .env file (or create) in the project's root folder and set the variable NEXT_PUBLIC_GTM_CONTAINER_ID with the container ID provided by GTM platform.
  \n\n \`\`\`JavaScript
  NEXT_PUBLIC_GTM_CONTAINER_ID=GTM-XXXXXX
  \`\`\` \n\n
  If you do not want to set up environment variables, settings can be applied simply on the gtmConfig object found in the src/config.js file.
  \n\n \`\`\`JavaScript
  export const gtmConfig = {
    containerId: ''
  };
  \`\`\` \n\n
    `,
  },
  {
    id: 21,
    title: "HTML Plugins",
    path: "/html-plugins",
    content: `# HTML Plugins
  \n\n By default, the GTM library's push platform captures the browser location data, such as url, pathname, title, and other details. You can extend it to match your business needs. For example, you may need the event name, site section, campaign name, product name, price, process step, etc.
  <br/>
  ## Page View
  \n\n \`\`\`JavaScript
  // src/pages/login.js
  import { useEffect } from 'react';
  import { gtm } from '../lib/gtm';

  const Page = () => {
    useEffect(() => {
      gtm.push({event: 'page_view'});
    }, []);

    return (
      <div>
        content
      </div>
    );
  };
  \`\`\` \n\n
  This example shows you how to track the page view event once the page component gets mounted. It can also be used on mounting virtual pages, such as modals, dialogs, etc.
  <br/>
  <br/>
  ## Other action
  \n\n \`\`\`JavaScript
  // src/pages/product.js
  import { gtm } from '../lib/gtm';

  const Page = () => {
    const handleAddToCart = () => {
      gtm.push({
        event: 'add_to_cart',
        price: '317,65',
        currency: 'EUR',
        name: 'Dell Monitor 27"'
      });
    };

    return (
      <div>
        <div>Dell Monitor 27"</div>
        <div>EUR 317,65</div>
        <button onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    );
  };
  \`\`\` \n\n
  As it can be seen, this example has multiple variables to help you identify the product that was added to cart and its price. These are called conversion variables in most systems, and they are used to determine the user behaviour after visiting a specific page or site section. If the user does not complete the checkout process, you are able to identify most products added to the cart, and make decisions based on metrics.
    `,
  },
  {
    id: 22,
    title: "HTML Geolocation",
    path: "/html-geolocation",
    content: ` # HTML Geolocation
  \n\n Feb 14, 2023
  \n\n - Add support for Next.js 13
  \n\n - Add auth page layout
  \n\n - Refactor and simplify project code
  \n\n - Add Iconly Bulk Icons
  \n\n - Add @heroicons/react dependency
  \n\n - Update Api fetch logic
  \n\n - Update Auth0 login flow
  \n\n - Update Dashboard Overview page
  \n\n - Update design system aesthetics
  \n\n - Update app settings implementation and available options
  \n\n - Update dependencies
  \n\n - Update layouts
  \n\n - Update project folder structure
  \n\n - Update Figma (Sketch no update)
  <br/>

## v2.0.0
\n\n May 27, 2022                                                                 
  \n\n - Add Calendar app                                                             
  \n\n - Migrate CRA to Next.js                                                      
  \n\n - Replace Auth0 Popup with Redirect
  \n\n - Update Firebase to v9
  \n\n - Update dependencies
  \n\n - Update theme colors and shadows

## v1.1.0
\n\n Jul 29, 2021
  \n\n - Add RTL (right-to-left) support
  \n\n - Add TypeScript version
  \n\n - Add components pages
  \n\n - Add foundation pages
  \n\n - Add invoice pages
  \n\n - Add multi-language support
  \n\n - Update landing page
  \n\n - Update dashboard sidebar
  \n\n - Update theme palette
## v1.0.0
\n\n Jul 10, 2021
  \n\n - Initial release.
    `,
  },
  {
    id: 23,
    title: "HTML Drag/Drop",
    path: "/html-drag/drop",
    content: ` # HTML Drag/Drop
  \n\n Our support mainly covers pre-sale questions, basic product questions and bug reports through our support email: support@deviasio.zendesk.com.
  \n\n To be eligible to request the technical support you must have purchased the theme and have at least one Standard or Extended license.
  \n\n On submitting a support request please do describe your issue with more details. If you can provide a link to your developing site then this can help us to solve your issue faster.
  \n\n All 3rd party plugins used in the theme are provided as bonus, and we do not give any guarantee to their functionalities. Our support does not cover any 3rd party plugin customization or bug fixes that are not in our control.
  \n\n Customers are always welcome to ask for feature requests and give suggestions that can improve our premium themes. All feature requests definitely will be considered, and the new features will be released with upcoming releases.
    `,
  },
  {
    id: 24,
    title: "HTML Web storage",
    path: "/html-web-storage",
    content: `# HTML Web storage
  \n\n This documentation covers only broad use cases and relies on you or your developers having existing and pretty extensive previous knowledge of the libraries in use, as well as web technologies. Should this not be your scenario, please keep in mind our team offers special training and exclusive for pay support, and based on your project size and our availability, we can take custom requests at a fee. For more details please get in contact with our team of experts on https://devias.io/contact.
    `,
  },
  // Add more top-level pages as needed
];
 
export default HTMLPage;
