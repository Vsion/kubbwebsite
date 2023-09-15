"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6741],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},b="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},i=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(n),i=r,k=b["".concat(u,".").concat(i)]||b[i]||m[i]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=i;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[b]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}i.displayName="MDXCreateElement"},6461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:2},o="\u5b89\u88c5\u5185\u6838",p={unversionedId:"quick-start/core_quickstart",id:"quick-start/core_quickstart",title:"\u5b89\u88c5\u5185\u6838",description:"\u5b89\u88c5\u524d\u9700\u5b8c\u6210\u9884\u5148\u51c6\u5907\u3002",source:"@site/docs/quick-start/core_quickstart.md",sourceDirName:"quick-start",slug:"/quick-start/core_quickstart",permalink:"/website/en/docs/quick-start/core_quickstart",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u9884\u5148\u51c6\u5907",permalink:"/website/en/docs/quick-start/prerequisite"},next:{title:"\u5b89\u88c5\u5e95\u5ea7",permalink:"/website/en/docs/quick-start/buildingbase_quickstart"}},u={},s=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5feb\u901f\u4f53\u9a8c",id:"\u5feb\u901f\u4f53\u9a8c",level:2},{value:"\u90e8\u7f72\u4e00\u4e2a\u79c1\u6709\u4ed3\u5e93",id:"\u90e8\u7f72\u4e00\u4e2a\u79c1\u6709\u4ed3\u5e93",level:2}],c={toc:s},b="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5b89\u88c5\u5185\u6838"},"\u5b89\u88c5\u5185\u6838"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5b89\u88c5\u524d\u9700\u5b8c\u6210",(0,r.kt)("a",{parentName:"p",href:"./prerequisite"},"\u9884\u5148\u51c6\u5907"),"\u3002")),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Kubebb\u5b98\u65b9\u63d0\u4f9b\u4e86helm\u4ed3\u5e93\uff0c\u65b9\u4fbf\u7528\u6237\u5b89\u88c5: ",(0,r.kt)("a",{parentName:"p",href:"https://kubebb.github.io/components/"},"https://kubebb.github.io/components/"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6dfb\u52a0helm\u4ed3\u5e93")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add kubebb https://kubebb.github.io/components/\nhelm repo update\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u547d\u540d\u7a7a\u95f4")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8bf7\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u4fee\u6539\u547d\u540d\u7a7a\u95f4\u540d\u79f0")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace kubebb-system\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm install -nkubebb-system kubebb-core kubebb/kubebb-core\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u67e5\u770b\u5b89\u88c5\u72b6\u6001")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods -nkubebb-system \n")),(0,r.kt)("p",null,"\u5982\u679c\u4e00\u5207\u6b63\u5e38\uff0c\u8f93\u5165\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"NAME                           READY   STATUS    RESTARTS   AGE\nkubebb-core-6bd7c5f679-742mq   1/1     Running   0          21h\n")),(0,r.kt)("h2",{id:"\u5feb\u901f\u4f53\u9a8c"},"\u5feb\u901f\u4f53\u9a8c"),(0,r.kt)("p",null,"\u5185\u6838\u5b89\u88c5\u5b8c\u6210\u540e\u53ef\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubebb/components"},"\u5b98\u65b9\u7ec4\u4ef6\u4ed3\u5e93"),"\u5feb\u901f\u4f53\u9a8c\u7ec4\u4ef6\u5316\u7684\u90e8\u7f72:"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"kubebb"),"\u4e3a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubebb/components"},"\u5b98\u65b9\u7ec4\u4ef6\u4ed3\u5e93"),",\u5185\u6838\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u9ed8\u8ba4\u6dfb\u52a0,\u63d0\u4f9b\u591a\u4e2a\u8ba4\u8bc1\u4ed3\u5e93\u3001\u7ec4\u4ef6\u548c\u7ec4\u4ef6\u5e94\u7528.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u4ed3\u5e93\u5217\u8868:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get repository -nkubebb-system\n")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u81f3\u5c11\u5305\u542b\u4ed3\u5e93",(0,r.kt)("strong",{parentName:"p"},"kubebb")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"(base) \u279c  charts git:(dev) kubectl get repository -nkubebb-system\nNAME     AGE\nkubebb   14m\n")),(0,r.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u770b\u5230",(0,r.kt)("strong",{parentName:"p"},"kubebb"),",\u53ef\u624b\u52a8\u6dfb\u52a0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/kubebb/components/main/repos/repository_kubebb.yaml\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u83b7\u53d6\u5b98\u65b9\u4ed3\u5e93\u4e2d\u7684\u7ec4\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get components -nkubebb-system  -l kubebb.component.repository=kubebb\n")),(0,r.kt)("p",null,"\u5982\u679c\u4e00\u5207\u6b63\u5e38\uff0c\u8f93\u51fa\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"NAME                       AGE\nkubebb.bc-apis             135m\nkubebb.bc-depository       135m\nkubebb.bc-explorer         135m\nkubebb.cluster-component   135m\nkubebb.fabric-operator     135m\nkubebb.ingress-nginx       135m\nkubebb.kubebb              135m\nkubebb.kubebb-core         135m\nkubebb.minio               135m\nkubebb.tekton-operator     135m\nkubebb.u4a-component       135m\nkubebb.weaviate            135m\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u90e8\u7f72\u4e00\u4e2a\u7ec4\u4ef6")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4ee5\u90e8\u7f72",(0,r.kt)("inlineCode",{parentName:"p"},"kubebb.minio"),"\u4e3a\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/kubebb/components/main/examples/minio/componentplan.yaml\n")),(0,r.kt)("p",null,"\u67e5\u770b\u7ec4\u4ef6\u90e8\u7f72\u72b6\u6001:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get componentplan my-minio -oyaml\n")),(0,r.kt)("p",null,"\u67e5\u770b\u7ec4\u4ef6Pod\u72b6\u6001"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods -l core.kubebb.k8s.com.cn/componentplan=my-minio\n")),(0,r.kt)("p",null,"\u5982\u679c\u4e00\u5207\u6b63\u5e38\uff0c\u8f93\u51fa\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"NAME             READY   STATUS    RESTARTS   AGE\nmy-minio-0   1/1     Running   0          42h\nmy-minio-1   1/1     Running   0          42h\nmy-minio-2   1/1     Running   0          42h\n")),(0,r.kt)("h2",{id:"\u90e8\u7f72\u4e00\u4e2a\u79c1\u6709\u4ed3\u5e93"},"\u90e8\u7f72\u4e00\u4e2a\u79c1\u6709\u4ed3\u5e93"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728\u5b98\u65b9\u4ed3\u5e93\u4e2d\u90e8\u7f72chartmuseum")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/kubebb/components/main/examples/chartmuseum/componentplan.yaml\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u4ed3\u5e93")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# repository_chartmuseum.yaml\napiVersion: core.kubebb.k8s.com.cn/v1alpha1\nkind: Repository\nmetadata:\n  name: chartmuseum\n  namespace: kubebb-system\nspec:\n  url: http://chartmuseum.kubebb-system.svc.cluster.local:8080\n  pullStategy:\n    intervalSeconds: 120\n    retry: 5\n")),(0,r.kt)("p",null,"\u521b\u5efa\u4ed3\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f repository_chartmuseum.yaml \n")),(0,r.kt)("p",null,"\u6267\u884c\u7ed3\u679c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get repository -nkubebb-system\nNAME          AGE\nchartmuseum   4m41s\nkubebb        15h\n")),(0,r.kt)("p",null,"\u7aef\u53e3\u66b4\u9732"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward service/chartmuseum 8080:8080 -nkubebb-system\n")),(0,r.kt)("p",null,"\u4e0a\u4f20\u81ea\u5b9a\u4e49chart"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'helm create mychart\ncd mychart\nhelm package .\ncurl --data-binary "@mychart-0.1.0.tgz" http://localhost:8080/api/charts\n')),(0,r.kt)("p",null,"\u4ece\u79c1\u6709\u4ed3\u5e93\u4e2d\u67e5\u770b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get component -l kubebb.component.repository=chartmuseum -nkubebb-system\nNAME                  AGE\nchartmuseum.mychart   4m27s\n")))}m.isMDXComponent=!0}}]);