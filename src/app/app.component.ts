import { Component } from '@angular/core';
import { delay } from 'q';
import { trigger, state, transition, style, animate, keyframes } from '@angular/animations';
import * as CryptoJS from 'crypto-js'
import {Chart} from 'chart.js'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('loading', [
      state('void', style({ opacity: '0' })),
      state('start', style({ opacity: '1' })),
      transition('void => start', animate('500ms cubic-bezier(.59,.05,.56,1.07)')),
      transition('start => void', animate('500ms cubic-bezier(.59,.05,.56,1.07)')),
    ]),
    trigger('loadingLoadingWindow', [
      state('void', style({ opacity: '0' })),
      state('start', style({ opacity: '1' })),
      state('pryc', style({ opacity: '0' })),
      state('odjezd', style({ opacity: '0' })),
      transition('void => start', animate('500ms cubic-bezier(.59,.05,.56,1.07)')),
      transition('start => pryc', animate('100ms cubic-bezier(.59,.05,.56,1.07)')),
    ]),
    trigger('loadingSuccesWindow', [
      state('odjezd', style({ opacity: '0' })),
      transition('* => odjezd', animate('500ms cubic-bezier(.59,.05,.56,1.07)')),
    ]),
    trigger('loadingSide1', [
      state('odjezd', style({ transform: 'translateX(-48vw)' })),
      transition('* => odjezd', animate('1500ms cubic-bezier(.59,.05,.56,1.07)')),
    ]),
    trigger('loadingSide2', [
      state('odjezd', style({ transform: 'translateX(+48vw)' })),
      transition('* => odjezd', animate('1500ms cubic-bezier(.59,.05,.56,1.07)')),
    ]),
    trigger('left', [
      state('odjezd', style({ transform: 'Rotate(40deg) translateX(+0.1vw)' })),
      transition('* => odjezd', animate('1500ms cubic-bezier(.59,.05,.56,1.07)')),
    ]),
    trigger('right', [
      state('odjezd', style({ transform: 'Rotate(-40deg) translateX(-0.1vw)' })),
      transition('* => odjezd', animate('1500ms cubic-bezier(.59,.05,.56,1.07)')),
    ]),
    trigger('box', [
      state('void', style({ height: '3vh', opacity: '0' })),
      state('odjezd', style({})),
      transition('void => odjezd', animate('600ms cubic-bezier(.59,.05,.56,1.07)')),
      transition('odjezd => void', animate('450ms cubic-bezier(.59,.05,.56,1.07)')),
    ]),
    trigger('console', [
      state('void', style({ width: '1vw', height: '0.5vh', opacity: '0', transform: 'translateX(30vw)' })),
      state('odjezd', style({})),
      transition('void => odjezd', animate('700ms cubic-bezier(.59,.05,.56,1.07)')),
      transition('odjezd => void', animate('700ms cubic-bezier(.59,.05,.56,1.07)')),
    ]),

  ]

})
export class AppComponent {
  element: HTMLElement;
  public loading;
  // LOADING
  public settings: boolean;
  public konzole: string = '';
  public loadingpryc: boolean = false;
  public loadingon: boolean = true;
  public SFA: string = '';
  public ofibg: boolean = false;
  public TheMachine: string = '';
  public console: boolean = false;
  public chart:any;
  //routing
  //karty
  public windows:[{name:string, keytype:string, purpose:string, keyalphabet:string,alphabet:string, Plaintext:string, output:string, event:string}]=[{ name:'None', keytype:'None', purpose:'None', keyalphabet:'None', alphabet:'None', Plaintext:'None', output:'None', event:'None'}];
  public chartData: [{ count: number, char: string }] = [{ count: 0, char: '0' }];
  public alphabet = [];
  public Keyalphabet = [];
  public CS: boolean;
  public disabled = [false, false, false, false, false, false, false, false];
  public analysis = [];
  public volno: boolean = true;
  public type = '';
  //PLAYFAIR
  public Replace: [{ name: string, name2: string }] = [{ name: 'X', name2: '' }];
  counter=0;
  counterAn=0
  toosmall=false;



  constructor() { this.Loading() }


  async Loading() {
    if (window.screen.width < 700) { 
      this.toosmall=true
    }
    /*this.Replace.splice(this.Replace.indexOf({name:'X',name2:''}));
    function delay(ms: number) {
      return new Promise( resolve => setTimeout(resolve, ms) );
    
  }
      var text="./initializing.SYSTEM.RECOVERY";
      
      for(var i=0;i<text.length;i++){
        await delay(20);
        this.konzole+=text.charAt(i);
       
      }
      await delay(1000);
      this.loadingpryc=true;
      await delay(10);
      this.loadingon=false;
      await delay(30);
      this.loadingon=true;
      this.SFA="SEEKING ADMIN"
      for(i=0;i<=10; i++){
        
      this.SFA+=" .";
      await delay(600);
      if(i%3==1){this.SFA="SEEKING ADMIN"}
      }
      await delay(1000);
      this.loadingon=false;
      await delay(10);
      this.loadingon=true;*/
    this.windows.splice(0);
    this.loading = 'start'
    let a = ['KERNEL', 'OPERATING SYSTEM', 'PROTOCOLS', 'PROCESSING', 'RECOGNITION', 'MEMORY', 'LEARNING', 'HEURISTICS', 'ENGINEERING'];
    let b = ['DOD', 'FBI', 'CIA', 'NSA', 'DEA', 'ECHELON', 'DGSI', 'DGSE', 'MI6', 'GCHQ', 'FSB', 'SVR'];
    for (var i = 0; i < a.length; i++) {
      this.SFA = 'INITIATING : ' + a[i]
      if (i != 5) { await delay(200) } else { await delay(600) }
    }
    for (var i = 0; i < b.length; i++) {
      this.SFA = 'ACQUIRING : ' + b[i]
      await delay(200)
    }
    this.SFA = 'SUCCESS!';
    await delay(300);
    this.loading = 'pryc';
    await delay(700);
    this.loading = 'odjezd';
    var TheMachineText: string[];
    await delay(1600);
    this.console = true;
    TheMachineText = ["What", "are", "your", "commands", "?"];
    this.zasobnik(TheMachineText)
    await delay(300);
    this.disabled[0] = true;
    this.windows[this.counter]={ name:'Command list', keytype:'None', purpose:'Command line manual', keyalphabet:'None', alphabet:'None', Plaintext:'None', output:'None', event:'help' };
    this.counter+=1;
    //console.log('dostal jsem se až sem jeeej')
    /*  for (var i = 0; i < TheMachineText.length; i++) {
  
        this.writing(TheMachineText[i])
        await delay(TheMachineText[i].length * 60 + 700)
  
      }
  */
  }


  async writing(String2print) {
    this.volno = false
    function delay(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    for (var i = 0; i < String2print.length; i++) {
      var StringP = String2print[i];
      for (var y = 0; y <= StringP.length; y++) {
        if (StringP.charAt(y) == ' ') {
          await delay(200);
          this.TheMachine += StringP.charAt(y);
        } else {
          this.TheMachine += StringP.charAt(y);
          await delay(60);
        }

      } await delay(400); this.TheMachine = '';
    }


    this.volno = true

    /* await delay(1000);
     for(y=this.TheMachine.length;y>=0;y--){
      this.TheMachine=this.TheMachine.substr(1);
     await delay(30);
   }*/
  }
  async consoleinput(event) {
    //console.log(this.windows);
    var TheMachineText: string[];
    function delay(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    switch (event.target.value.toLowerCase()) {
      //help
      case "help": {
        if (this.disabled[0] == false) {
          this.disabled[0] = true;
          TheMachineText = ['Initializing:', 'help']
          this.zasobnik(TheMachineText)
          await delay(300);
          this.windows[this.counter]=({ name:'Command list', keytype:'None', purpose:'Command line manual', keyalphabet:'None', alphabet:'None', Plaintext:'None', output:'None', event:'help' });
          this.counter+=1;
          break;
        } else {
          TheMachineText = ['This', 'window', 'is', 'already', 'in', 'use'];
          this.zasobnik(TheMachineText);
          break;
        }
      }
      case "kill help": {
        //console.log('snažím se zabít help')
        if (this.disabled[0] == true) {
          this.disabled[0] = false;
          TheMachineText = ['Target', 'Eliminated'];
          this.zasobnik(TheMachineText);
          this.windows.splice(this.windows.findIndex(x => x.event==='help'),1);
          this.counter-=1
          //console.log(this.counter)
          break;
        } else {
          TheMachineText = ['no', 'such', 'window', 'found'];
          this.zasobnik(TheMachineText);
          break;
        }
      }
      //help---
      //caesar
      case "caesar": {
        if (this.disabled[1] == false) {
          this.disabled[1] = true;
          TheMachineText = ['Initializing:', 'caesar', 'cipher']
          this.zasobnik(TheMachineText);
          await delay(300);
          this.windows[this.counter]=({ name: 'caesar cipher', keytype: 'Alphabet', purpose: 'Cipher settings',keyalphabet:'None', alphabet: 'CaesarAlphabet', Plaintext: 'CaesarPlaintext', output: 'OutputCaesar', event: 'Caesar'});
          //console.log(this.windows);
          this.counter+=1;
          break;
        } else {
          TheMachineText = ['This', 'window', 'is', 'already', 'in', 'use'];
          this.zasobnik(TheMachineText)
          break;
        }
      }
      case "kill caesar": {
        if (this.disabled[1] == true) {
          this.disabled[1] = false;
          TheMachineText = ['Et', 'tu', 'Brute','?'];
          this.zasobnik(TheMachineText);
          this.windows.splice(this.windows.findIndex(x => x.event==='Caesar'),1);
          this.counter-=1
          break;
        } else {
          TheMachineText = ['no', 'such', 'window', 'found'];
          this.zasobnik(TheMachineText);
          break;
        }
      }
      //caesar---
      //substitution
      case "substitution": {
        if (this.disabled[2] == false) {
          this.disabled[2] = true;
          TheMachineText = ['Initializing:', 'substitution', 'cipher']
          this.zasobnik(TheMachineText);
          await delay(300);
          this.windows[this.counter]=({ name: 'substitution cipher', keytype: 'Alphabet', purpose: 'cipher settings', alphabet: 'SubstitutionAlphabet', Plaintext: 'SubstitutionPlaintext', output: 'OutputSubstitution', keyalphabet: 'SubstitutionKeyAlphabet', event: 'Substitution' });
          this.counter+=1;
          break;
        } else {
          TheMachineText = ['This', 'window', 'is', 'already', 'in', 'use'];
          this.zasobnik(TheMachineText)
          break;
        }
      }
      case "kill substitution": {
        if (this.disabled[2] == true) {
          this.disabled[2] = false;
          TheMachineText = ['Target', 'eliminated'];
          this.zasobnik(TheMachineText);
          await delay(300);
          this.windows.splice(this.windows.findIndex(x => x.event==='Substitution'),1);
          this.counter-=1;
          break;
        } else {
          TheMachineText = ['no', 'such', 'window', 'found'];
          this.zasobnik(TheMachineText)
          break;
        }
      }
      //substitution ---
      //Vigenere
      case "vigenere": {
        if (this.disabled[3] == false) {
          this.disabled[3] = true;
          TheMachineText = ['Initializing:', 'Vigenère', 'cipher']
          this.zasobnik(TheMachineText);
          await delay(300);
          this.windows[this.counter]=({ name: 'Vigenere cipher', keytype: 'Alphabet', purpose: 'cipher settings', alphabet: 'VigenereAlphabet', Plaintext: 'VigenerePlaintext', output: 'OutputVigenere', keyalphabet: 'VigenereKey', event: 'Vigenere' });
          this.counter+=1;
          break;
        } else {
          TheMachineText = ['This', 'window', 'is', 'already', 'in', 'use'];
          this.zasobnik(TheMachineText);
          break;
        }
      }
      case "kill vigenere": {

        if (this.disabled[3] == true) {
          this.disabled[3] = false;
          TheMachineText = ['Target', 'eliminated'];
          this.zasobnik(TheMachineText);
          await delay(300);
          this.windows.splice(this.windows.findIndex(x => x.event==='Vigenere'),1);
          this.counter-=1;
          break;
        } else {
          TheMachineText = ['no', 'such', 'window', 'found'];
          this.zasobnik(TheMachineText)
          break;
        }
      }
      //vigenere --
      //analysis
      case "analysis": {
        if (this.disabled[4] == false) {
          this.disabled[4] = true;
          TheMachineText = ['Initializing:', 'cryptoanalysis']
          this.zasobnik(TheMachineText);
          await delay(300);
          this.windows[this.counter]=({  name: 'Cryptoanalysis', keytype: 'Alphabet', purpose: 'Frequency Analysis',keyalphabet:'None', alphabet: 'AnalysisAlphabet', Plaintext: 'AnalysisPlaintext', output: 'OutputAnalysis', event: 'Analysis' });
          this.counter+=1;
          break;
        } else {
          TheMachineText = ['This', 'window', 'is', 'already', 'in', 'use'];
          this.zasobnik(TheMachineText);
          break;
        }
      }
      case "kill analysis": {
        if (this.disabled[4] = true) {
          this.disabled[4] = false;
          TheMachineText = ['cryptoanalysis', 'canceled'];
          this.zasobnik(TheMachineText)
          await delay(300);
          this.windows.splice(this.windows.findIndex(x => x.event==='Analysis'),1);
          this.counter-=1;
          this.chartData=[{count:0, char:'0'}];
          this.counterAn=0;
          break;
        } else {
          TheMachineText = ['no', 'such', 'window', 'found'];
          this.zasobnik(TheMachineText);
          break;
        }
      }//analysis---
      //playfair
      case "playfair": {
        if (this.disabled[5] == false) {
          this.disabled[5] = true;
          TheMachineText = ['Initializing:', 'Playfair', 'cipher']
          this.zasobnik(TheMachineText);
          await delay(300);
          this.windows[this.counter]=({ name: 'Playfair cipher', keytype: 'Alphabet', purpose: 'cipher settings', alphabet: 'PlayfairAlphabet', Plaintext: 'PlayfairPlaintext', keyalphabet: 'PlayfairKeyAlphabet', output: 'OutputPlayfair', event: 'Playfair' });
          this.counter+=1;
          break;
        } else {
          TheMachineText = ['This', 'window', 'is', 'already', 'in', 'use'];
          this.zasobnik(TheMachineText);
          break;
        }
      }
      case "kill playfair": {
        if (this.disabled[5] == true) {
          this.disabled[5] = false;
          TheMachineText = ['Target', 'eliminated'];
          this.zasobnik(TheMachineText)
          await delay(300);
          this.windows.splice(this.windows.findIndex(x => x.event==='Playfair'),1);
          this.counter-=1;
          break;
        } else {
          TheMachineText = ['no', 'such', 'window', 'found'];
          this.zasobnik(TheMachineText)
          break;
        }
      }
      case "aes": {
        if (this.disabled[6] == false) {
          this.disabled[6] = true;
          TheMachineText = ['Initializing:', 'AES']
          this.zasobnik(TheMachineText);
          await delay(300);
          this.windows[this.counter]=({ name: 'Advanced Encryption Standard', keytype: 'Alphabet', purpose: 'cipher settings',keyalphabet:'None', alphabet: 'None', Plaintext: 'aesPlaintext', output: 'Outputaes', event: 'aes'});
          this.counter+=1;
          break;
        } else {
          TheMachineText = ['This', 'window', 'is', 'already', 'in', 'use'];
          this.zasobnik(TheMachineText);
          break;
        }
      }
      case "kill aes": {
        if (this.disabled[6] == true) {
          this.disabled[6] = false;
          TheMachineText = ['Target', 'eliminated'];
          this.zasobnik(TheMachineText);
          await delay(300);
          this.counter-=1;
          this.windows.splice(this.windows.findIndex(x => x.event==='aes'),1);
          break;
        } else {
          TheMachineText = ['no', 'such', 'window', 'found'];
          this.zasobnik(TheMachineText);
          break;
        }

      }
      case "sha": {
        if (this.disabled[7] == false) {
          this.disabled[7] = true;
          TheMachineText = ['Initializing:', 'SHA']
          this.zasobnik(TheMachineText);
          await delay(300);
          this.windows[this.counter]=({  name: 'SHA', keytype: 'None', purpose: 'cipher settings',keyalphabet:'None', alphabet: 'None', Plaintext: 'shaPlaintext', output: 'Outputsha', event: 'sha'});
          this.counter+=1;
          break;
        } else {
          TheMachineText = ['This', 'window', 'is', 'already', 'in', 'use'];
          this.zasobnik(TheMachineText);
          break;
        }
      }
      case "kill sha": {
        if (this.disabled[6] == true) {
          this.disabled[6] = false;
          TheMachineText = ['Target', 'eliminated'];
          this.zasobnik(TheMachineText);
          await delay(300);
          this.counter-=1;
          this.windows.splice(this.windows.findIndex(x => x.event==='aes'),1);
          break;
        } else {
          TheMachineText = ['no', 'such', 'window', 'found'];
          this.zasobnik(TheMachineText)
          break;
        }


      }
      case "kill all": {
        for (var i = 0; i < this.disabled.length; i++) {
          this.disabled[i] = false;
          this.windows.splice(i)
        }
        this.counter=0;
        TheMachineText = ['all', 'sessions', 'have', 'been', 'terminated'];
        this.zasobnik(TheMachineText);
        this.chartData=[{count:0, char:'0'}]
        this.counterAn=0
        break;
      }
      default:{
        TheMachineText = ['Invalid','command'];
        this.zasobnik(TheMachineText);
      }
    }

    //playfair---
    event.target.value = "";
    if (this.disabled[4] == true) { }

  }
  Sifrovat(typ) {
    var kryptogram = '';
    if (typ != 'Analysis' && typ != 'aes' && typ != 'sha') {

      this.getalphabet(typ);
    }

    var Plaintext = (<HTMLInputElement>document.getElementById(typ + 'Plaintext')).value;
    //console.log(typ)
    if (typ != 'aes' && typ != 'sha') {
      Plaintext = Plaintext.toUpperCase();
    }
    try { var Decode = (<HTMLInputElement>document.getElementById('decode' + typ)).checked; } catch (Exception) { Decode = false }


    switch (typ) {
      case 'Caesar': {

        if (Plaintext.length > 0) {

          for (var i = 0; i < Plaintext.length; i++) {

            if (this.alphabet.indexOf(Plaintext.charAt(i)) == -1) {
              //console.log(this.alphabet);
              kryptogram += Plaintext.charAt(i);

            } else {
              var posun = parseInt((<HTMLInputElement>document.getElementById('Caesar')).value);

              if (Plaintext.charAt(i) == 'C' && Plaintext.charAt(i + 1) == 'H' && this.CS == true) {
                if (posun + this.alphabet.indexOf('CH') >= this.alphabet.length) {
                  posun -= this.alphabet.length;
                }
                i++;
                kryptogram += this.alphabet[this.alphabet.indexOf('CH') + posun]



              } else {
                if (posun + this.alphabet.indexOf(Plaintext.charAt(i)) >= this.alphabet.length) {
                  posun -= this.alphabet.length

                }
                kryptogram += this.alphabet[this.alphabet.indexOf(Plaintext.charAt(i)) + posun]
                //console.log('Kryptogram', kryptogram);
              }

            }
          }
        }
        break;
      }
      case 'Substitution': {

        for (i = 0; i < Plaintext.length; i++) {
          if (this.alphabet.indexOf(Plaintext.charAt(i)) != -1 && Decode == true) {
            kryptogram += this.Keyalphabet[this.alphabet.indexOf(Plaintext.charAt(i))]
          } else if (Decode != true && this.Keyalphabet.indexOf(Plaintext.charAt(i)) != -1) { kryptogram += this.alphabet[this.Keyalphabet.indexOf(Plaintext.charAt(i))] } else {
            kryptogram += Plaintext.charAt(i);
          }
        }
        break;
      }

      case 'Vigenere': {
        var Key = (<HTMLInputElement>document.getElementById('VigenereKey')).value.toUpperCase();
        Key = Key.split(' ').join('');
        var y = 0
        if (this.CS == true) {
          Plaintext.split('CH').join('$');
          this.alphabet[this.alphabet.indexOf('CH')] = '$';
        }
        for (i = 0; i < Plaintext.length; i++) {
          if (y == Key.length) {
            y -= Key.length;
          }
          if (this.alphabet.indexOf(Plaintext.charAt(i)) != -1) {
            if (this.alphabet.indexOf(Plaintext.charAt(i)) + this.alphabet.indexOf(Key.charAt(y)) >= this.alphabet.length && Decode != true) {
              kryptogram += this.alphabet[this.alphabet.indexOf(Plaintext.charAt(i)) + this.alphabet.indexOf(Key.charAt(y)) - this.alphabet.length]
              y++;
            } else if (Decode != true) {
              kryptogram += this.alphabet[this.alphabet.indexOf(Plaintext.charAt(i)) + this.alphabet.indexOf(Key.charAt(y))];
              y++;
            } else if (this.alphabet.indexOf(Plaintext.charAt(i)) - this.alphabet.indexOf(Key.charAt(y)) < 0 && Decode == true) {
              kryptogram += this.alphabet[this.alphabet.indexOf(Plaintext.charAt(i)) - this.alphabet.indexOf(Key.charAt(y)) + this.alphabet.length]
              y++;
            } else if (Decode == true) {
              kryptogram += this.alphabet[this.alphabet.indexOf(Plaintext.charAt(i)) - this.alphabet.indexOf(Key.charAt(y))];
              y++;
            }
          } else { kryptogram += Plaintext.charAt(i) }

          kryptogram.split('$').join('CH')
        }
        break;
      }
      case 'Analysis': {
      
       
        this.chartData = [{ count: 0, char: '0' }];
        this.analysis = [];
        var chars = []

        for (i = 0; i < Plaintext.length; i++) {
          if (chars.indexOf(Plaintext.charAt(i)) == -1 && Plaintext.charAt(i)!=' ') {
            this.analysis.push(1);
            chars.push(Plaintext.charAt(i))
          }
          else {
            this.analysis[chars.indexOf(Plaintext.charAt(i))] += 1
          }

        }
       



        for (i = 0; i < this.analysis.length; i++) {
          if (i != 0) {
            this.chartData.push({ count: 0, char: 'lul', })
          }
          this.chartData[i].char = chars[i];
          this.chartData[i].count = this.analysis[i];
          

        }
        this.chartData.sort(function (a, b) {
          return a.count - b.count
        })
        this.chartData.reverse();
        var Chars=[];
        var counts=[];
        for(i=0;i<this.chartData.length;i++){
          Chars.push(this.chartData[i].char)
          counts.push(this.chartData[i].count)
        }
     
      if(this.counterAn==0) { this.chart = new Chart('canvas',{
          type:'bar',
          data:{
            labels: Chars,
            datasets:[
              {data:counts,
              fill:true
            }]
            },
          options:{
            animation: {
              duration: 0 
          },
          legend:{
            display: false
          },
          scales:{
            xAxes:[{
              display:true,
           
            }],
            yAxes:[{
              display:true,
              ticks: {
                beginAtZero: true
            }
            }]
          }
          }

        })}else{
     

          this.chart.data.labels=Chars;
    this.chart.data.datasets=[{data:counts}];
    this.chart.update();
            
    
        }
        if(Plaintext.length>0){this.counterAn++}
        break;
      }
      case 'Playfair': {
      
   
        for (i = 0; i < Plaintext.length; i++) {
          if (this.Keyalphabet.indexOf(Plaintext.charAt(i)) == -1) {
            Plaintext = Plaintext.split(Plaintext.charAt(i)).join('');
            i -= 1
          }
        }

        if (this.Keyalphabet.length < 16) { break; }
        this.Replace = [{ name: 'X', name2: '' }]
        this.Replace.splice(this.Replace.indexOf({ name: 'X', name2: '' }));
        this.getalphabet('Playfair');

        var radky = parseInt((<HTMLInputElement>document.getElementById('Playfair')).value);
        if (((<HTMLInputElement>document.getElementById('PlayfairAlphabet')).value.toUpperCase()) == 'CS') {
          Plaintext = Plaintext.split('CH').join('$');
          this.Keyalphabet[this.Keyalphabet.indexOf('CH')] = '$';
        }
        if (radky < 4 || this.Keyalphabet.length % radky > 1 || this.Keyalphabet.length / radky < 4) {
          do {
            radky++;
            if (this.Keyalphabet.length / radky < 4) { radky = 4 }
          } while (radky < 4 || this.Keyalphabet.length % radky > 1 || this.Keyalphabet.length / radky < 4);
          ((<HTMLInputElement>document.getElementById('Playfair')).value) = radky.toString();
        }


        if (this.Replace.length < this.Keyalphabet.length % radky) {
          this.Replace.push({ name: 'Lul', name2: 'lulo' })
          this.Replace[0].name = 'Replace1';
          this.Replace[0].name2 = 'Replace2';
        } else if (this.Replace.length > this.Keyalphabet.length % radky) { this.Replace.splice(0) }
        var duplicity;
        duplicity = ((<HTMLInputElement>document.getElementById('Duplicity')).value).toUpperCase();
        if (this.Replace.length > 0) {
          var equalization = [];
          equalization.push(((<HTMLInputElement>document.getElementById('Replace1')).value).toUpperCase());
          equalization.push(((<HTMLInputElement>document.getElementById('Replace2')).value).toUpperCase());
          this.Keyalphabet.splice(this.Keyalphabet.indexOf(equalization[0]), 1)
          Plaintext.split(equalization[0]).join(equalization[1]);
        }
        for (i = 0; i < Plaintext.length; i += 2) {
          if (i + 1 == Plaintext.length) { Plaintext += duplicity }
          var Bigram = [];
          Bigram.push(Plaintext.charAt(i));
          Bigram.push(Plaintext.charAt(i + 1));
          if (Bigram[0] === Bigram[1]) {
            Bigram[1] = duplicity;
            i -= 1
          }
          if (this.Keyalphabet.indexOf(Bigram[0]) % radky == this.Keyalphabet.indexOf(Bigram[1]) % radky) {
            for (y = 0; y < Bigram.length; y++) {
              if (this.Keyalphabet.indexOf(Bigram[y]) + radky >= this.Keyalphabet.length && Decode != true) {
                kryptogram += this.Keyalphabet[this.Keyalphabet.indexOf(Bigram[y]) % radky]
              } else if (Decode != true) {
                kryptogram += this.Keyalphabet[this.Keyalphabet.indexOf(Bigram[y]) + radky]
              } else if (Decode == true && this.Keyalphabet.indexOf(Bigram[y]) - radky < 0) {
                kryptogram += this.Keyalphabet[this.Keyalphabet.indexOf(Bigram[y]) - radky + this.Keyalphabet.length]
              } else if (Decode == true) { kryptogram += this.Keyalphabet[this.Keyalphabet.indexOf(Bigram[y]) - radky] }
            }
            //radky
          } else if (~~(this.Keyalphabet.indexOf(Bigram[0]) / radky) == ~~(this.Keyalphabet.indexOf(Bigram[1]) / radky)) {

            for (y = 0; y < Bigram.length; y++) {
              //console.log(this.Keyalphabet.indexOf(Bigram[y]) % radky);
              if (~~((this.Keyalphabet.indexOf(Bigram[y]) + 1) / radky) != ~~(this.Keyalphabet.indexOf(Bigram[y]) / radky) && Decode != true) {
                kryptogram += this.Keyalphabet[this.Keyalphabet.indexOf(Bigram[y]) - (radky - 1)];
              } else if (Decode != true) {
                kryptogram += this.Keyalphabet[this.Keyalphabet.indexOf(Bigram[y]) + 1]
              } else if (Decode == true && Math.floor((this.Keyalphabet.indexOf(Bigram[y]) - 1) / radky) != Math.floor(this.Keyalphabet.indexOf(Bigram[y]) / radky)) {
                kryptogram += this.Keyalphabet[this.Keyalphabet.indexOf(Bigram[y]) + (radky - 1)];
              } else if (Decode == true) { kryptogram += this.Keyalphabet[this.Keyalphabet.indexOf(Bigram[y]) - 1] }
            }
            //zbytek
          } else {

            kryptogram += this.Keyalphabet[this.Keyalphabet.indexOf(Bigram[0]) - (this.Keyalphabet.indexOf(Bigram[0]) % radky - this.Keyalphabet.indexOf(Bigram[1]) % radky)]
            kryptogram += this.Keyalphabet[this.Keyalphabet.indexOf(Bigram[1]) - (this.Keyalphabet.indexOf(Bigram[1]) % radky - this.Keyalphabet.indexOf(Bigram[0]) % radky)]

          } if (((<HTMLInputElement>document.getElementById('PlayfairAlphabet')).value.toUpperCase()) == 'CS') { kryptogram = kryptogram.split('$').join('CH'); }
          kryptogram += ' ';
        }
        break;
      }
      case 'aes': {
        if (Plaintext == '') { //console.log(); 
          break };
        var key = ((<HTMLInputElement>document.getElementById('AESKey')).value);
        if (Decode != true) {
          kryptogram = CryptoJS.AES.encrypt(Plaintext.toString(), key.toString()).toString();
        }
        else {
          //console.log(Plaintext)
          var bytes = CryptoJS.AES.decrypt(Plaintext, key);
          var kryptogram = bytes.toString(CryptoJS.enc.Utf8);

        }
      }
      case 'sha': {

        if (Plaintext == '') { break; }
        switch (this.type) {
          case 'Sha1': {

            kryptogram = CryptoJS.SHA1(Plaintext).toString(CryptoJS.enc.Base64);
            break;
          }
          case 'Sha256': {
            kryptogram = CryptoJS.SHA256(Plaintext).toString(CryptoJS.enc.Base64);
            break;
          }
          case 'Sha512': {
            kryptogram = CryptoJS.SHA512(Plaintext).toString(CryptoJS.enc.Base64);
            break;
          }
        }
      }
    }

    if (typ != 'Analysis') { (<HTMLInputElement>document.getElementById('Output' + typ)).textContent = kryptogram; }
  }
  CKey(znamenko) {
    //console.log(znamenko);
    if (znamenko == 'CaesarP' || znamenko == 'CaesarN') {
      var klic = parseInt((<HTMLInputElement>document.getElementById('Caesar')).value);
      this.getalphabet('Caesar');
    } else {
      var klic = parseInt((<HTMLInputElement>document.getElementById('Playfair')).value);
      this.getalphabet('Playfair');
    }
    var uhuh = znamenko;
    if (znamenko == 'CaesarP' || znamenko == 'PlayfairP') { znamenko = '+' } else { znamenko = '-' }
    if (this.alphabet.length > 0) {
      switch (znamenko) {

        case '+': {
          klic += 1;
          if (klic > this.alphabet.length - 1) {
            klic = klic - this.alphabet.length
          }
          break;
        }
        case '-': {
          klic -= 1;
          if (klic < 0) {
            klic = klic + this.alphabet.length
          }

          break;
        }
      }
      if (uhuh == 'CaesarP' || uhuh == 'CaesarN') {
        (<HTMLInputElement>document.getElementById('Caesar')).value = '';
        (<HTMLInputElement>document.getElementById('Caesar')).value = klic.toString();
        this.Sifrovat('Caesar');
      } else {
        (<HTMLInputElement>document.getElementById('Playfair')).value = '';
        (<HTMLInputElement>document.getElementById('Playfair')).value = klic.toString();
        this.Sifrovat('Playfair');
      }
    }

  }
  getalphabet(sifra) {
    //console.log('abeceda zatím v pohodě')
    this.Keyalphabet = []
    this.alphabet = []
    switch ((<HTMLInputElement>document.getElementById(sifra + 'Alphabet')).value.toUpperCase()) {
      case 'EN': {
        var string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toUpperCase();
        for (var i = 0; i < string.length; i++) {
          this.alphabet.push(string.charAt(i));
        }
        this.CS = false
        break
      }
      case 'CS': {
        string = 'AÁBCČDĎEÉĚFGHChIÍJKLMNŇOÓPQRŘSŠTŤUÚŮVWXYÝZŽ'.toUpperCase();
        for (var i = 0; i < string.length; i++) {
          if (string.charAt(i) == 'C' && string.charAt(i + 1) == 'H') {
            this.alphabet.push(string.charAt(i) + string.charAt(i + 1));
            i++
          } else { this.alphabet.push(string.charAt(i)); }
        }
        this.CS = true;
        break;

      }
      default: {
        var zaklad = (<HTMLInputElement>document.getElementById(sifra + 'Alphabet')).value.toUpperCase();
        var cisty = '';

        do {
          cisty += zaklad.charAt(0);
          zaklad = zaklad.split(zaklad.charAt(0)).join('');
        } while (zaklad.length > 0)
        for (var i = 0; i < cisty.length; i++) {
          this.alphabet.push(cisty.charAt(i));
        }
        this.CS = false
        break;
      }

    }
    if (sifra == 'Substitution' || sifra == 'Playfair') {
      zaklad = (<HTMLInputElement>document.getElementById(sifra + 'KeyAlphabet')).value.toUpperCase();
      if(sifra==='Playfair')
      {zaklad = zaklad.split(' ').join('');}
      cisty = '';

      do {
        cisty += zaklad.charAt(0);
        zaklad = zaklad.split(zaklad.charAt(0)).join('');
      } while (zaklad.length > 0)
      for (var i = 0; i < cisty.length; i++) {
        this.Keyalphabet.push(cisty.charAt(i));
      }
      for (var i = 0; i < this.alphabet.length; i++) {
        if (this.Keyalphabet.indexOf(this.alphabet[i]) == -1) {
          this.Keyalphabet.push(this.alphabet[i]);
        }
        if (this.Keyalphabet.length >= this.alphabet.length) {
          break;
        }

      }
    }
  }
  public zasobnik(predat) {
    //console.log('chystam se predavam', predat);
    if (this.volno == true) {
      //console.log('predavam', predat);
      this.writing(predat);
    }
  }
}


