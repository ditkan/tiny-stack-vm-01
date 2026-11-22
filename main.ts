import{readdirSync as A,readFileSync as B,mkdirSync as C,writeFileSync as D}from'node:fs'
let I=process.env.MAKEFUN_INPUT_DIR||'/input',O=process.env.MAKEFUN_OUTPUT_DIR||'/output'
for(let d of A(I).sort()){
 let P=B(I+'/'+d+'/program.bin'),N=B(I+'/'+d+'/input.bin'),n=P.length,S=new Int32Array(256),s=0,K=new Int32Array(64),k=0,M=new Int32Array(256),T=new Uint8Array(65536),l=0,q=0,p=0,t=0,e=0,a=0,b=0,v=0,g='',j=0
 L:for(;;){
  if(t>=1e6){e=10;break}
  if(p<0||p>=n){e=9;break}
  let o=P[p],m=o==1?1:o==2?4:o>47&&o<52?2:0
  if(o>83||o>7&&o<16||o>34&&o<48||o>53&&o<64||o>65&&o<80){e=5;break}
  if(p+m>=n){e=9;break}
  t++;let x=p+1+m;p=x
  switch(o){
   case 0:e=0;break L
   case 1:if(s>255){e=3;break L}S[s++]=(P[x-1]<<24)>>24;break
   case 2:if(s>255){e=3;break L}S[s++]=P[x-4]|P[x-3]<<8|P[x-2]<<16|P[x-1]<<24;break
   case 3:if(!s){e=2;break L}s--;break
   case 4:if(!s){e=2;break L}if(s>255){e=3;break L}S[s]=S[s-1];s++;break
   case 5:if(s<2){e=2;break L}v=S[s-1];S[s-1]=S[s-2];S[s-2]=v;break
   case 6:if(s<2){e=2;break L}if(s>255){e=3;break L}S[s]=S[s-2];s++;break
   case 7:if(s<3){e=2;break L}v=S[s-3];S[s-3]=S[s-2];S[s-2]=S[s-1];S[s-1]=v;break
   case 23:case 27:if(!s){e=2;break L}S[s-1]=o==23?-S[s-1]:~S[s-1];break
   case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:case 26:case 28:case 29:case 30:case 32:case 33:case 34:
    if(s<2){e=2;break L}
    b=S[s-1];a=S[s-2]
    if(o>18&&o<23&&!b){e=4;break L}
    v=o==16?(a+b)|0:o==17?(a-b)|0:o==18?Math.imul(a,b):o==19?(a/b)|0:o==20?b==-1?0:a%b|0:o==21?(a>>>0)/(b>>>0)|0:o==22?(a>>>0)%(b>>>0)|0:o==24?a&b:o==25?a|b:o==26?a^b:o==28?a<<(b&31):o==29?a>>(b&31):o==30?a>>>(b&31)|0:o==32?a==b?1:0:o==33?a<b?1:0:a>>>0<b>>>0?1:0
    S[s-2]=v;s--;break
   case 48:case 49:case 50:
    if(o>48){if(!s){e=2;break L}if((S[--s]==0)!=(o==49))break}
    p=x+(((P[x-2]|P[x-1]<<8)<<16)>>16);break
   case 51:if(k>63){e=7;break L}K[k++]=x;p=P[x-2]|P[x-1]<<8;break
   case 52:if(!k){e=8;break L}p=K[--k];break
   case 64:if(!s){e=2;break L}a=S[s-1];if(a<0||a>255){e=6;break L}S[s-1]=M[a];break
   case 65:if(s<2){e=2;break L}a=S[s-1];if(a<0||a>255){e=6;break L}v=S[s-2];s-=2;M[a]=v;break
   case 80:if(!s){e=2;break L}g=String(S[s-1]);if(l+g.length>65536){e=11;break L}s--;for(j=0;j<g.length;j++)T[l++]=g.charCodeAt(j);break
   case 81:if(!s){e=2;break L}if(l>65535){e=11;break L}T[l++]=S[--s]&255;break
   case 82:if(s>255){e=3;break L}S[s++]=q<N.length?N[q++]:-1;break
   case 83:if(!s){e=2;break L}e=S[--s]&255;break L
  }
 }
 C(O+'/'+d,{recursive:true});D(O+'/'+d+'/stdout.bin',T.subarray(0,l));D(O+'/'+d+'/exit.txt',e+'\n')
}
