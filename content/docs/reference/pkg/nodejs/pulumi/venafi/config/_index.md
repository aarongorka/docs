---
title: "Module config"
title_tag: "Module config | Package @pulumi/venafi | Node.js SDK"
linktitle: "config"
meta_desc: "Explore members of the config module in the @pulumi/venafi package."
git_sha: "9800749d9f78f899f2523499f5f5f1bbffd20be1"
block_external_search_index: true
---

<!-- WARNING: this page was generated by a tool. Do not edit it by hand. -->
<!-- To change it, please see https://github.com/pulumi/docs/tree/master/tools/tscdocgen. -->

{{< resource-docs-alert "venafi" >}}






<h3>APIs</h3>
<ul class="api">
    <li><a href="#accessToken"><span class="symbol api"></span>accessToken</a></li>
    <li><a href="#apiKey"><span class="symbol api"></span>apiKey</a></li>
    <li><a href="#devMode"><span class="symbol api"></span>devMode</a></li>
    <li><a href="#tppPassword"><span class="symbol api"></span>tppPassword</a></li>
    <li><a href="#tppUsername"><span class="symbol api"></span>tppUsername</a></li>
    <li><a href="#trustBundle"><span class="symbol api"></span>trustBundle</a></li>
    <li><a href="#url"><span class="symbol api"></span>url</a></li>
    <li><a href="#zone"><span class="symbol api"></span>zone</a></li>
</ul>




<h2 id="apis">APIs</h2>
<h3 class="pdoc-module-header" id="accessToken" data-link-title="accessToken">
    <a href="https://github.com/pulumi/pulumi-venafi/blob/9800749d9f78f899f2523499f5f5f1bbffd20be1/sdk/nodejs/config/vars.ts#L12">
        let <strong>accessToken</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kd'>let</span> accessToken: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span> | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span> = <span class='s2'> __config.get(&#34;accessToken&#34;)</span>;</code></pre>

Access token for TPP, user should use this for authentication

<h3 class="pdoc-module-header" id="apiKey" data-link-title="apiKey">
    <a href="https://github.com/pulumi/pulumi-venafi/blob/9800749d9f78f899f2523499f5f5f1bbffd20be1/sdk/nodejs/config/vars.ts#L16">
        let <strong>apiKey</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kd'>let</span> apiKey: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span> | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span> = <span class='s2'> __config.get(&#34;apiKey&#34;)</span>;</code></pre>

API key for Venafi Cloud. Example: 142231b7-cvb0-412e-886b-6aeght0bc93d

<h3 class="pdoc-module-header" id="devMode" data-link-title="devMode">
    <a href="https://github.com/pulumi/pulumi-venafi/blob/9800749d9f78f899f2523499f5f5f1bbffd20be1/sdk/nodejs/config/vars.ts#L21">
        let <strong>devMode</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kd'>let</span> devMode: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean'>boolean</a></span> | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span> = <span class='s2'> __config.getObject&lt;boolean&gt;(&#34;devMode&#34;)</span>;</code></pre>

When set to true, the resulting certificate will be issued by an ephemeral, no trust CA rather than enrolling using
Venafi Cloud or Platform. Useful for development and testing.

<h3 class="pdoc-module-header" id="tppPassword" data-link-title="tppPassword">
    <a href="https://github.com/pulumi/pulumi-venafi/blob/9800749d9f78f899f2523499f5f5f1bbffd20be1/sdk/nodejs/config/vars.ts#L25">
        let <strong>tppPassword</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kd'>let</span> tppPassword: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span> | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span> = <span class='s2'> __config.get(&#34;tppPassword&#34;)</span>;</code></pre>

Password for WebSDK user. Example: password

<h3 class="pdoc-module-header" id="tppUsername" data-link-title="tppUsername">
    <a href="https://github.com/pulumi/pulumi-venafi/blob/9800749d9f78f899f2523499f5f5f1bbffd20be1/sdk/nodejs/config/vars.ts#L29">
        let <strong>tppUsername</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kd'>let</span> tppUsername: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span> | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span> = <span class='s2'> __config.get(&#34;tppUsername&#34;)</span>;</code></pre>

WebSDK user for Venafi Platform. Example: admin

<h3 class="pdoc-module-header" id="trustBundle" data-link-title="trustBundle">
    <a href="https://github.com/pulumi/pulumi-venafi/blob/9800749d9f78f899f2523499f5f5f1bbffd20be1/sdk/nodejs/config/vars.ts#L34">
        let <strong>trustBundle</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kd'>let</span> trustBundle: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span> | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span> = <span class='s2'> __config.get(&#34;trustBundle&#34;)</span>;</code></pre>

Use to specify a PEM-formatted file that contains certificates to be trust anchors for all communications with the
Venafi Web Service. Example: trust_bundle = "${file("chain.pem")}"

<h3 class="pdoc-module-header" id="url" data-link-title="url">
    <a href="https://github.com/pulumi/pulumi-venafi/blob/9800749d9f78f899f2523499f5f5f1bbffd20be1/sdk/nodejs/config/vars.ts#L38">
        let <strong>url</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kd'>let</span> url: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span> | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span> = <span class='s2'> __config.get(&#34;url&#34;)</span>;</code></pre>

The Venafi Web Service URL.. Example: https://tpp.venafi.example/vedsdk

<h3 class="pdoc-module-header" id="zone" data-link-title="zone">
    <a href="https://github.com/pulumi/pulumi-venafi/blob/9800749d9f78f899f2523499f5f5f1bbffd20be1/sdk/nodejs/config/vars.ts#L43">
        let <strong>zone</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kd'>let</span> zone: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span> | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span> = <span class='s2'> __config.get(&#34;zone&#34;)</span>;</code></pre>

DN of the Venafi Platform policy folder or name of the Venafi Cloud zone. Example for Platform: testpolicy\\vault
Example for Venafi Cloud: Default

