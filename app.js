var canvas = document.get Elemer ementById("ca anvas") ;
canvas.width = window.inner Width;
canvas ,he ight = window. innerHe ight;
var gl = canvas.ge tContex t( 'webgl . );
if(1gl ) t
con sole.err or("Unable to initi alize WebGL.");
I
var time =0.0:
attribu te vec2 pos itior n;
gi . Pos ition = vec4(positi on,0.0, 1. 0 );
var fr agmen tsou rce =) -
preci sion h ighp float 3
unifo rm fl oat width;
uniform 'float height t:
vec2 resolution =vec2(width, r eight);
uniform f float time;
#defi ine POINT COUNT 8
vec2 poi ints[POINT.COUNT];
cons t float t speed = -0.if(h)=0.0)f
h = sqrt(h);
vec2 x = [vec2(h. -n) - () 1 2.0;
vec2 uv = 5 stan(x)=pow(abs(x), vec (1.0/3.0));
float t i uv.x + uv.y -kx;
t = clamp(t,9.0,1.1:
vec2 gos=d + (c + b+t +t;
res = length(gos ) 3
relsef
float z =sqrt(-p):
float v =acos( 9/(p)*z*2.0) ) / 3.vec2 c = |points(8] + points(11) /2.0:
vec2 c prev;
float dist = 116966. 0
for(int t = 0: \ < POT NT COUNT-1:i++){
c prev = c:
c = (points(1) +points[i+l]) 1 2.0;
dist = min/dist, sdBerier(pos,scale * c prev, scale * pointslil,scale * c));
return max(0.8,dist);
void main( )(
vec2 uv = gl FragGoord.xy/resolution.xy;
float widthHeightRatio =resolution.x/resolution.y;
vec2 centre =vec2(0.5,0.5):
vec2 pos = centre - uv;
pos.y /= widthWeightRatio;
pos.y +=0 . 02:
float scale = 8.800015 * height;
float t = time;
float dist = getSegment(t, pos, 0.8,scale);
float glow = getGlow(dist, radius, intensity);
vec3 col = vec33(0.0):
col t= 10.69*vec3(smoothstep(0 .003, 0.001,dist)>;
col += glow *vec3(1.0.0.05,0.3);
dist = getSegment(t,pos, 3.4, scale);
glow = getGlow(dist,radius, intensity);
col t=16 . Oxvec3(smoothstep(0.003, 0.001,dist));
col += glow *vec3(0.1,0.4,1.0):
col = 1.0 - exp(-col );
col = pow(col,vec3(0.4545));
gl_FragColor = vec (col,1.0);var vertexDataBuffer = gl.createBuffer( );
gi.bindBuffer(g1.ARRAV.BUFFER, vertexDataBuffer);
g1.bufferData(g1.ARRAY.BUFFER, vertexData, gl.STATIC.DRAW):
var positionHandle = getAttr iblocation(program, "position') ;
g1.enablevertexAttribArray(positionHandle);
ql.vertexAttribPointer(positionHandle,
2.
gl. FLOAT,
false,
2*4,
o
) :
var timeHandle = getUniform formLocation(program, "time") ;
var widthHandle = get UniformLocation(program,'width');
var heightHandle = getUniforml ocation(program, "height")3
gl.uniform1f(widthHandle,window. innerWidth);
gl.uniformlf(heightHandle,window. innerHeight);
var lastFrame = Date.now( );
var thisFrame;
function draw( )f
thisFrame = Date.now() ;
time += (thisFrame -lastFrame)/1000 i
lastFrame = thisFrame;
gl.uniformlf(timeHandle,time);
gì.drawArrays(g1. TRIANGL E STRIP, O,4);
requestAnimationFrame(draw);
draw( ):vindow.addfrentListener","restre",onk(ndowlesize, false);
function onwindowfestze( )(
canwas.width = window.tnnerwidth;
canvas.beight =window,innertieight;
gl.viewport(0,0, canvas.width, canvas .height);
gl.uniformifieidt (dtwindle, window.inmericatin);
gl.untformif(beightHandle le, window, innertie(ght);
,
function compleshaver'shaderssurce,shaderType)!
ver shader = ol .createShader( shadertype);
91.shadersource(studen, studentSours urce);
[ff191.getShaderPoraccter (shader, gì.coverte STATUS)M
throw "Shader compile failed with; "+g!1. getShader.InfoLog(shader)) :
return shader;
var attributelocation =g1.getAttrtbLocation(program, name);
if (attributeLocation =ma -1) (
throw "Cannot find attribute t name ",
return attributelocation;
function gettinformLocation/program,name) (
var attributeLocation =91. getuniformLocation(program,name);
if (attributeLocation =au -I) t
throw "Cannot find uniform + + name +", "
return attributeLocation;
var vertexShader = comptleShoder vertexSource, gl.vERTEX.SHADER);
ver fragmentShader a compleshander(from mentSource, gl.FRAGNEMT SHADES ( ) ;
var program = gl .createProgram( );
91.attacksfuderlorogram, vertestablerly
gl.attachShader(program,fragmentShader);
gl.l(nkProgram(program);
gl.useProgram(program);
var vertexData = new Float32Array(1
-1.0. 1.0.
-1.0, -1.0
1.0. 1.0
1.0, -1 . e,
float m = cos(v):
float n = sin(v)*1.732050808;
vec3 t = vec3(m + m, -n -m, n - m ) * z - kx;
t = clamp( t,0.0, 1.0 );
vec2 gos=d + (c + b+t.x)+t.x;
float dis = dot(gos,gos):
res = dis;
gos=d+lc + b+t.y)+t .y;
dis=dot(gos,gos);
res = min(res,dis);
gos=dt (c+b+t.z )+1.z;
dis=dot(gos,gos);
res = min n(res.dis);
res = sart( res ) :
return res;
vec2 getHeartPosition(floa at t)(
return vec2(16.9 * sin(t) * sin(t) *sin(t),
(13.0 * cos(t) -5.8 * cos(2.0+1)
2.0 * cos(3.8+t) -cos(4.ext))1;
float gerclow(float dist, float radius, float intensity){
return poodradius/dist, intensity);
float getSegment(float t, vec?pos, float offset, float scale)t
for(int i = 0;( < POINT COUNT;t+){
points(i) = getHeartPosition (offset + float(i)*len + fract(speed * t)* 6.28);
)-5 i
const fl oat l en=0.25;
float int ensit y= 1.3;
flo at r adius=0.0 ()8;
float sdB ezier( vec2 pos,ve c2 A,vec2 B, vec2 c
2.0xB + C;
2. 0;
pos;
loat Kk = 1.0 /dot(b ,b);
kk * dot(a,b);
kk * (2. 0*dot(a,a)+dot(d,b))13
kk * dot(d,a ) ;
float res =0.0;
p = ky - kx*kx i
p3 = p*p*p;
h = kx+(2.0×k×4×-3.Oxky)+kz i
qtq 4.0xp3;