---
title: Module certificates/v1beta1
---

<!-- WARNING: this page was generated by a tool. Do not edit it by hand. -->
<!-- To change it, please see https://github.com/pulumi/docs/tree/master/tools/tscdocgen. -->

<a href="../../">@pulumi/kubernetes</a> &gt; <a href="../">certificates</a> &gt; v1beta1

<div class="toggleVisible">
<div class="collapsed">
<h2 class="pdoc-module-header toggleButton" title="Click to show Index">Index ▹</h2>
</div>
<div class="expanded">
<h2 class="pdoc-module-header toggleButton" title="Click to hide Index">Index ▾</h2>
<div class="pdoc-module-contents">
<ul>
<li><a href="#CertificateSigningRequest">class CertificateSigningRequest</a></li>
<li><a href="#CertificateSigningRequestList">class CertificateSigningRequestList</a></li>
</ul>

<a href="https://github.com/pulumi/pulumi-kubernetes/blob/2699db66ee75a706694bcc6c352b2c3fda3eac3e/sdk/nodejs/certificates/v1beta1/CertificateSigningRequest.ts">certificates/v1beta1/CertificateSigningRequest.ts</a> <a href="https://github.com/pulumi/pulumi-kubernetes/blob/2699db66ee75a706694bcc6c352b2c3fda3eac3e/sdk/nodejs/certificates/v1beta1/CertificateSigningRequestList.ts">certificates/v1beta1/CertificateSigningRequestList.ts</a> 
</div>
</div>
</div>


<h2 class="pdoc-module-header" id="CertificateSigningRequest">
<a class="pdoc-member-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/2699db66ee75a706694bcc6c352b2c3fda3eac3e/sdk/nodejs/certificates/v1beta1/CertificateSigningRequest.ts#L12">class <b>CertificateSigningRequest</b></a>
</h2>
<div class="pdoc-module-contents">
<pre class="highlight"><span class='kd'>extends</span> <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResource'>CustomResource</a></pre>
{{% md %}}

Describes a certificate signing request

{{% /md %}}
<h3 class="pdoc-member-header" id="CertificateSigningRequest-constructor">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/2699db66ee75a706694bcc6c352b2c3fda3eac3e/sdk/nodejs/certificates/v1beta1/CertificateSigningRequest.ts#L71"> <b>constructor</b></a>
</h3>
<div class="pdoc-member-contents">
{{% md %}}

<pre class="highlight"><span class='kd'></span><span class='kd'>new</span> CertificateSigningRequest(name: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>, args?: inputApi.certificates.v1beta1.CertificateSigningRequest, opts?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions'>pulumi.CustomResourceOptions</a>)</pre>


Create a certificates.v1beta1.CertificateSigningRequest resource with the given unique name, arguments, and options.

* `name` The _unique_ name of the resource.
* `args` The arguments to use to populate this resource&#39;s properties.
* `opts` A bag of options that control this resource&#39;s behavior.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="CertificateSigningRequest-get">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/2699db66ee75a706694bcc6c352b2c3fda3eac3e/sdk/nodejs/certificates/v1beta1/CertificateSigningRequest.ts#L54">method <b>get</b></a>
</h3>
<div class="pdoc-member-contents">
{{% md %}}

<pre class="highlight"><span class='kd'>public static </span>get(name: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>, id: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#ID'>pulumi.ID</a>&gt;, opts?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions'>pulumi.CustomResourceOptions</a>): <a href='#CertificateSigningRequest'>CertificateSigningRequest</a></pre>


Get the state of an existing `CertificateSigningRequest` resource, as identified by `id`.
Typically this ID  is of the form <namespace>/<name>; if <namespace> is omitted, then (per
Kubernetes convention) the ID becomes default/<name>.

Pulumi will keep track of this resource using `name` as the Pulumi ID.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="CertificateSigningRequest-getProvider">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/2699db66ee75a706694bcc6c352b2c3fda3eac3e/sdk/nodejs/node_modules/@pulumi/pulumi/resource.d.ts#L19">method <b>getProvider</b></a>
</h3>
<div class="pdoc-member-contents">
{{% md %}}

<pre class="highlight"><span class='kd'></span>getProvider(moduleMember: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>): ProviderResource | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span></pre>

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="CertificateSigningRequest-isInstance">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/2699db66ee75a706694bcc6c352b2c3fda3eac3e/sdk/nodejs/certificates/v1beta1/CertificateSigningRequest.ts#L65">method <b>isInstance</b></a>
</h3>
<div class="pdoc-member-contents">
{{% md %}}

<pre class="highlight"><span class='kd'>public static </span>isInstance(obj: <span class='kd'><a href='https://www.typescriptlang.org/docs/handbook/basic-types.html#any'>any</a></span>): <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean'>boolean</a></span></pre>


Returns true if the given object is an instance of CertificateSigningRequest.  This is designed to work even
when multiple copies of the Pulumi SDK have been loaded into the same process.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="CertificateSigningRequest-apiVersion">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/2699db66ee75a706694bcc6c352b2c3fda3eac3e/sdk/nodejs/certificates/v1beta1/CertificateSigningRequest.ts#L19">property <b>apiVersion</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'>public </span>apiVersion: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='s2'>"certificates.k8s.io/v1beta1"</span>&gt;;</pre>
{{% md %}}

APIVersion defines the versioned schema of this representation of an object. Servers should
convert recognized schemas to the latest internal value, and may reject unrecognized
values. More info:
https://git.k8s.io/community/contributors/devel/api-conventions.md#resources

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="CertificateSigningRequest-id">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/2699db66ee75a706694bcc6c352b2c3fda3eac3e/sdk/nodejs/node_modules/@pulumi/pulumi/resource.d.ts#L187">property <b>id</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>id: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>Output</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#ID'>ID</a>&gt;;</pre>
{{% md %}}

id is the provider-assigned unique ID for this managed resource.  It is set during
deployments and may be missing (undefined) during planning phases.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="CertificateSigningRequest-kind">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/2699db66ee75a706694bcc6c352b2c3fda3eac3e/sdk/nodejs/certificates/v1beta1/CertificateSigningRequest.ts#L27">property <b>kind</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'>public </span>kind: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='s2'>"CertificateSigningRequest"</span>&gt;;</pre>
{{% md %}}

Kind is a string value representing the REST resource this object represents. Servers may
infer this from the endpoint the client submits requests to. Cannot be updated. In
CamelCase. More info:
https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="CertificateSigningRequest-metadata">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/2699db66ee75a706694bcc6c352b2c3fda3eac3e/sdk/nodejs/certificates/v1beta1/CertificateSigningRequest.ts#L30">property <b>metadata</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'>public </span>metadata: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;outputApi.meta.v1.ObjectMeta&gt;;</pre>
{{% md %}}
{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="CertificateSigningRequest-spec">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/2699db66ee75a706694bcc6c352b2c3fda3eac3e/sdk/nodejs/certificates/v1beta1/CertificateSigningRequest.ts#L35">property <b>spec</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'>public </span>spec: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;outputApi.certificates.v1beta1.CertificateSigningRequestSpec&gt;;</pre>
{{% md %}}

The certificate request itself and any additional information.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="CertificateSigningRequest-status">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/2699db66ee75a706694bcc6c352b2c3fda3eac3e/sdk/nodejs/certificates/v1beta1/CertificateSigningRequest.ts#L40">property <b>status</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'>public </span>status: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;outputApi.certificates.v1beta1.CertificateSigningRequestStatus&gt;;</pre>
{{% md %}}

Derived information about the request.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="CertificateSigningRequest-urn">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/2699db66ee75a706694bcc6c352b2c3fda3eac3e/sdk/nodejs/node_modules/@pulumi/pulumi/resource.d.ts#L17">property <b>urn</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>urn: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>Output</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#URN'>URN</a>&gt;;</pre>
{{% md %}}

urn is the stable logical URN used to distinctly address a resource, both before and after
deployments.

{{% /md %}}
</div>
</div>
<h2 class="pdoc-module-header" id="CertificateSigningRequestList">
<a class="pdoc-member-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/2699db66ee75a706694bcc6c352b2c3fda3eac3e/sdk/nodejs/certificates/v1beta1/CertificateSigningRequestList.ts#L10">class <b>CertificateSigningRequestList</b></a>
</h2>
<div class="pdoc-module-contents">
<pre class="highlight"><span class='kd'>extends</span> <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResource'>CustomResource</a></pre>
<h3 class="pdoc-member-header" id="CertificateSigningRequestList-constructor">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/2699db66ee75a706694bcc6c352b2c3fda3eac3e/sdk/nodejs/certificates/v1beta1/CertificateSigningRequestList.ts#L62"> <b>constructor</b></a>
</h3>
<div class="pdoc-member-contents">
{{% md %}}

<pre class="highlight"><span class='kd'></span><span class='kd'>new</span> CertificateSigningRequestList(name: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>, args?: inputApi.certificates.v1beta1.CertificateSigningRequestList, opts?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions'>pulumi.CustomResourceOptions</a>)</pre>


Create a certificates.v1beta1.CertificateSigningRequestList resource with the given unique name, arguments, and options.

* `name` The _unique_ name of the resource.
* `args` The arguments to use to populate this resource&#39;s properties.
* `opts` A bag of options that control this resource&#39;s behavior.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="CertificateSigningRequestList-get">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/2699db66ee75a706694bcc6c352b2c3fda3eac3e/sdk/nodejs/certificates/v1beta1/CertificateSigningRequestList.ts#L45">method <b>get</b></a>
</h3>
<div class="pdoc-member-contents">
{{% md %}}

<pre class="highlight"><span class='kd'>public static </span>get(name: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>, id: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#ID'>pulumi.ID</a>&gt;, opts?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions'>pulumi.CustomResourceOptions</a>): <a href='#CertificateSigningRequestList'>CertificateSigningRequestList</a></pre>


Get the state of an existing `CertificateSigningRequestList` resource, as identified by `id`.
Typically this ID  is of the form <namespace>/<name>; if <namespace> is omitted, then (per
Kubernetes convention) the ID becomes default/<name>.

Pulumi will keep track of this resource using `name` as the Pulumi ID.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="CertificateSigningRequestList-getProvider">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/2699db66ee75a706694bcc6c352b2c3fda3eac3e/sdk/nodejs/node_modules/@pulumi/pulumi/resource.d.ts#L19">method <b>getProvider</b></a>
</h3>
<div class="pdoc-member-contents">
{{% md %}}

<pre class="highlight"><span class='kd'></span>getProvider(moduleMember: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>): ProviderResource | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span></pre>

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="CertificateSigningRequestList-isInstance">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/2699db66ee75a706694bcc6c352b2c3fda3eac3e/sdk/nodejs/certificates/v1beta1/CertificateSigningRequestList.ts#L56">method <b>isInstance</b></a>
</h3>
<div class="pdoc-member-contents">
{{% md %}}

<pre class="highlight"><span class='kd'>public static </span>isInstance(obj: <span class='kd'><a href='https://www.typescriptlang.org/docs/handbook/basic-types.html#any'>any</a></span>): <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean'>boolean</a></span></pre>


Returns true if the given object is an instance of CertificateSigningRequestList.  This is designed to work even
when multiple copies of the Pulumi SDK have been loaded into the same process.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="CertificateSigningRequestList-apiVersion">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/2699db66ee75a706694bcc6c352b2c3fda3eac3e/sdk/nodejs/certificates/v1beta1/CertificateSigningRequestList.ts#L17">property <b>apiVersion</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'>public </span>apiVersion: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='s2'>"certificates.k8s.io/v1beta1"</span>&gt;;</pre>
{{% md %}}

APIVersion defines the versioned schema of this representation of an object. Servers should
convert recognized schemas to the latest internal value, and may reject unrecognized
values. More info:
https://git.k8s.io/community/contributors/devel/api-conventions.md#resources

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="CertificateSigningRequestList-id">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/2699db66ee75a706694bcc6c352b2c3fda3eac3e/sdk/nodejs/node_modules/@pulumi/pulumi/resource.d.ts#L187">property <b>id</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>id: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>Output</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#ID'>ID</a>&gt;;</pre>
{{% md %}}

id is the provider-assigned unique ID for this managed resource.  It is set during
deployments and may be missing (undefined) during planning phases.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="CertificateSigningRequestList-items">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/2699db66ee75a706694bcc6c352b2c3fda3eac3e/sdk/nodejs/certificates/v1beta1/CertificateSigningRequestList.ts#L20">property <b>items</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'>public </span>items: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;outputApi.certificates.v1beta1.CertificateSigningRequest[]&gt;;</pre>
{{% md %}}
{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="CertificateSigningRequestList-kind">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/2699db66ee75a706694bcc6c352b2c3fda3eac3e/sdk/nodejs/certificates/v1beta1/CertificateSigningRequestList.ts#L28">property <b>kind</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'>public </span>kind: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='s2'>"CertificateSigningRequestList"</span>&gt;;</pre>
{{% md %}}

Kind is a string value representing the REST resource this object represents. Servers may
infer this from the endpoint the client submits requests to. Cannot be updated. In
CamelCase. More info:
https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="CertificateSigningRequestList-metadata">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/2699db66ee75a706694bcc6c352b2c3fda3eac3e/sdk/nodejs/certificates/v1beta1/CertificateSigningRequestList.ts#L31">property <b>metadata</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'>public </span>metadata: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;outputApi.meta.v1.ListMeta&gt;;</pre>
{{% md %}}
{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="CertificateSigningRequestList-urn">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/2699db66ee75a706694bcc6c352b2c3fda3eac3e/sdk/nodejs/node_modules/@pulumi/pulumi/resource.d.ts#L17">property <b>urn</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>urn: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>Output</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#URN'>URN</a>&gt;;</pre>
{{% md %}}

urn is the stable logical URN used to distinctly address a resource, both before and after
deployments.

{{% /md %}}
</div>
</div>