(this["webpackJsonpquote-machine"]=this["webpackJsonpquote-machine"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(4),o=a(5),r=a(2),u=a(8),c=a(7),i=a(0),d=a.n(i),l=a(6),s=a.n(l),m=(a(15),a(1)),f=a.n(m);function h(){console.log("error?")}f()(document).ready((function(){f()("#new-quote").click((function(){f()("#text").fadeIn(1500),f()("#author").fadeIn(1500),f()("#new-quote").fadeIn(1500),f()("#tweet-quote").fadeIn(1500),f()("tumblr-quote").fadeIn(1500),console.log("this worked???")}))}));document.body.style.background="rgb(0, 10, 40)";var p=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).state={quote:null,author:"",link:""},o.randomQuote=o.randomQuote.bind(Object(r.a)(o)),o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?").done((function(t){setTimeout((function(){e.setState({quote:t.quoteText,author:t.quoteAuthor,link:""})}),500)})).fail(h)}},{key:"randomQuote",value:function(){var e=this;f.a.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?").done((function(t){setTimeout((function(){e.setState({quote:t.quoteText,author:t.quoteAuthor}),function(){for(var e=[],t=0;t<3;t++)e.push(Math.round(255*Math.random()));var a="rgb("+e[0]+", "+e[1]+", "+e[2]+")";document.body.style.background=a,document.getElementById("text").style.color=a,document.getElementById("author").style.color=a,document.getElementById("new-quote").style.background=a,document.getElementById("tweet-quote").style.background=a,document.getElementById("tumblr-quote").style.background=a}(),f()("#text").hide().fadeIn(1500),f()("#author").hide().fadeIn(1500),f()("#new-quote").hide().fadeIn(1500),f()("#tweet-quote").hide().fadeIn(1500),f()("#tumblr-quote").hide().fadeIn(1500),f()("#tweet-quote").attr("href",function(e){for(var t="",a=0;a<e.length;a++)" "==e[a]?t+="%20":t+=e[a];return"https://twitter.com/intent/tweet?status="+t}(t.quoteText)+"- "+t.quoteAuthor+"#quotes")}),500)})).fail(h),console.log("failed?")}},{key:"render",value:function(){return d.a.createElement("div",{id:"wrapper"},d.a.createElement("div",{id:"rel-wrapper"},d.a.createElement("div",{id:"quote-box"},d.a.createElement("script",{src:"https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"}),d.a.createElement("div",{id:"text",className:"center"},d.a.createElement("i",{className:"fa fas fa-quote-left"},"\xa0\xa0",this.state.quote)),d.a.createElement("div",{id:"author",className:"center"},d.a.createElement("p",{id:"innerAuthor"},this.state.author)),d.a.createElement("div",{id:"container"},d.a.createElement("div",{id:"butwrapper1"},d.a.createElement("a",{href:"https://twitter.com/intent/tweet?status=hello%20world",target:"_blank",id:"tweet-quote"},d.a.createElement("i",{className:"fa fa-twitter","aria-hidden":"true"})),d.a.createElement("a",{href:"https://www.tumblr.com/dashboard",target:"_blank",id:"tumblr-quote"},d.a.createElement("i",{className:"fa fa-tumblr-square","aria-hidden":"true"}))),d.a.createElement("div",{id:"butwrapper3"},d.a.createElement("button",{id:"new-quote",onClick:this.randomQuote},"New Quote"))))))}}]),a}(d.a.Component);s.a.render(d.a.createElement(p,null),document.getElementById("root"))},15:function(e,t,a){},9:function(e,t,a){e.exports=a(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.c2cf6051.chunk.js.map