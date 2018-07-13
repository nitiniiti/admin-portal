#!groovy

/*
The MIT License
Copyright (c) 2015-, CloudBees, Inc., and a number of other of contributors
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

node {


    //currentBuild.result = "SUCCESS"

    try {

       stage('Checkout')
      {

          checkout scm
       }

       stage('Enviornment')
	   {
         sh 'git --version'
         echo "Branch: ${env.BRANCH_NAME}"
         sh 'docker -v'
         sh 'printenv'
        }

        stage('Build Code')
        {
         sh './nodescript.sh'
        }
        
        stage('Run Unit Test Cases')
        {
        // sh './unittest.sh'

        }
        
        stage('Run Code Coverage')
        {
         //sh './codecoverage.sh'
        }
       stage('Build Docker Image')
        {

      //   env.NODE_ENV = "test"

        // print "Environment will be : ${env.NODE_ENV}"
        
         sh 'docker build -t admin-portal --no-cache .'

       }
       

       stage('Tag Docker Image for Push')
        {
         sh 'docker tag admin-portal 10.123.54.86:8081/docker/sprint5/admin-portal'
         

         }
         
      stage ('ping JFrog Artifactory Server')
      
      {
        sh 'curl -I -k -v http://10.123.54.86:8081/artifactory/api/system/ping'
      }
      
      stage ('Login to Jfrog Artifactory')
      
      {
          sh 'docker login -u admin -p password 10.123.54.86:8081'
      }
      
      
      //}
       stage('Push Docker Image to JFrog Artifactory Server')
        {
         sh ' docker push 10.123.54.86:8081/docker/sprint5/admin-portal'

         }
   

