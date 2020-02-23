'use strict'

//const insta = require('./func.js'); 
const Client = require('instagram-private-api').V1;
const delay = require('delay');
const chalk = require('chalk');
const inquirer = require('inquirer');
//const Spinner = require('cli-spinner').Spinner;

const questionTools = [
  {
    type:"list",
    name:"Tools",
    message:"Select tools:",
    choices:
      [
      "[1] Follow Followers Target",
      "[2] Unfollow Not Followback",
      "[3] Hapus Semua Postingan",
      "\n"
      ]
   }
  ]
  const main = async () => {
  var spinner;
  try{
    var toolChoise = await inquirer.prompt(questionTools);
    toolChoise = toolChoise.Tools;
    switch(toolChoise){
      case "[1] Follow Followers Target":
        const fftauto = require('./fftauto.js');
        await fftauto();
        break;
       
      case "[2] Unfollow Not Followback":
        const unfollnotfollback = require('./unfollnotfollback.js');
        await unfollnotfollback();
        break;
        
        
      case "[3] Hapus Semua Postingan":
        const hapussemuapostingan = require('./hapussemuapostingan.js');
        await hapussemuapostingan();
        break;
      default:
        console.log('\nERROR:\n[?] Aw, Snap! \n[!] Something went wrong while displaying this program!\n[!] Please try again!');
    }
  } catch(e) {
    //spinner.stop(true);
    //console.log(e);
  }
}

console.log(chalk`
  {bold.cyan
  ╦┌┐┌┌─┐┌┬┐┌─┐┌─┐┬─┐┌─┐┌┬┐
  ║│││└─┐ │ ├─┤│ ┬├┬┘├─┤│││
  ╩┘└┘└─┘ ┴ ┴ ┴└─┘┴└─┴ ┴┴ ┴
  ╔╦╗┌─┐┌─┐┬  ┌─┐    © 2020
   ║ │ ││ ││  └─┐   AEXINAV 
   ╩ └─┘└─┘┴─┘└─┘   -------       
}
      `);

main()
