# cdn react import is not preferred way to introduce react
# Because it makes network call to website 'https://unpkg.com/react@18/umd/react.development.js' which is costly operation.
# It is better to install react as package like we do for package 'parcel'.


# npm->npm doesnot have any full form->used to manage packages
# While creating our own npm package what ever data we provided in terminal will be converted in JSON ->stored in package.json
# package.json is configuaration for npm
# Bundler->It packages our app properly so that project can shipped to production.Basically it minifyze,cleaning,chuncking tc to our project and make it prod ready
# Parcel Bundler->We can install parcel using command 'npm install -D parcel'
# There r 2 type of packaged/dependency => 1)Normal dependency   2)Dev dependency

# package-lock.json->

# node_modules -> contains all the code which we installed i.e parcel code -> It also contain other dependency on which parcel is dependent.This is #                 called transitive dependency.That's why we have lot of folder in node_modules even if we just installed parcel package

# If we have package.json and package-lock.json we do not need to push node_modules in github. Package.json will keep track of what all dependency is # required and by looking at that json file developer can genrated the package in their environment.

# To built our app using parcel we use command "npx parcel index.html" Here index.html is starting point of our app.
# npx basically used to execute package 'parcel'

# parcel has hosted our app in localhost port=1234 (http://localhost:1234)

# To install react we use 'npm install react'-> we do not use -D as we require normal react
# To install reactDOM we use 'npm install react-dom'-> we do not use -D as we require normal react-dom
# Using above 2 commands we don't have to worry about cdn react links as we have install react and react-dom packages for our app

# Parcel
- Dev env
- local server
- HMR=Hot module replacement -> As soon as we save code , w/o refreshing our localhost we can see the result
- Parcel uses 'file watching algorithm' 
- caching -> faster build -> whenever we build our app using parcel '.parcel-cache' directory will be created because of which it take lesser time to build any changes.
- Image optimization
- Tree Shaking algorithm -> removed unused code
