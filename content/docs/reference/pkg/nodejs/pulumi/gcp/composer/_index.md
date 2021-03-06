---
title: "Module composer"
title_tag: "Module composer | Package @pulumi/gcp | Node.js SDK"
linktitle: "composer"
meta_desc: "Explore members of the composer module in the @pulumi/gcp package."
git_sha: "0c46c212e5430badafa0a4a775d8fb5b6926e30e"
block_external_search_index: true
---

<!-- WARNING: this page was generated by a tool. Do not edit it by hand. -->
<!-- To change it, please see https://github.com/pulumi/docs/tree/master/tools/tscdocgen. -->

{{< resource-docs-alert "gcp" >}}




<h3>Resources</h3>
<ul class="api">
    <li><a href="#Environment"><span class="symbol resource"></span>Environment</a></li>
</ul>

<h3>Functions</h3>
<ul class="api">
    <li><a href="#getImageVersions"><span class="symbol function"></span>getImageVersions</a></li>
</ul>

<h3>Others</h3>
<ul class="api">
    <li><a href="#EnvironmentArgs"><span class="symbol api"></span>EnvironmentArgs</a></li>
    <li><a href="#EnvironmentState"><span class="symbol api"></span>EnvironmentState</a></li>
    <li><a href="#GetImageVersionsArgs"><span class="symbol api"></span>GetImageVersionsArgs</a></li>
    <li><a href="#GetImageVersionsResult"><span class="symbol api"></span>GetImageVersionsResult</a></li>
</ul>


<h2 id="resources">Resources</h2>
<h3 class="pdoc-module-header" id="Environment" data-link-title="Environment">
    <a href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/environment.ts#L35">
        Resource <strong>Environment</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kr'>class</span> <span class='nx'>Environment</span> <span class='kr'>extends</span> <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResource'>CustomResource</a></code></pre>

An environment for running orchestration tasks.

Environments run Apache Airflow software on Google infrastructure.

To get more information about Environments, see:

* [API documentation](https://cloud.google.com/composer/docs/reference/rest/)
* How-to Guides
    * [Official Documentation](https://cloud.google.com/composer/docs)
    * [Configuring Shared VPC for Composer Environments](https://cloud.google.com/composer/docs/how-to/managing/configuring-shared-vpc)
* [Apache Airflow Documentation](http://airflow.apache.org/)

> **Warning:** We **STRONGLY** recommend  you read the [GCP guides](https://cloud.google.com/composer/docs/how-to)
  as the Environment resource requires a long deployment process and involves several layers of GCP infrastructure,
  including a Kubernetes Engine cluster, Cloud Storage, and Compute networking resources. Due to limitations of the API,
  This provider will not be able to automatically find or manage many of these underlying resources. In particular:
  * It can take up to one hour to create or update an environment resource. In addition, GCP may only detect some
    errors in configuration when they are used (e.g. ~40-50 minutes into the creation process), and is prone to limited
    error reporting. If you encounter confusing or uninformative errors, please verify your configuration is valid
    against GCP Cloud Composer before filing bugs against this provider.
  * **Environments create Google Cloud Storage buckets that do not get cleaned up automatically** on environment
    deletion. [More about Composer's use of Cloud Storage](https://cloud.google.com/composer/docs/concepts/cloud-storage).

#### Example Usage

<h4 class="pdoc-member-header" id="Environment-constructor">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/environment.ts#L91"> <b>constructor</b></a>
</h4>


<pre class="highlight"><code><span class='kd'></span><span class='kd'>new</span> Environment(name: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>, args?: <a href='#EnvironmentArgs'>EnvironmentArgs</a>, opts?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions'>pulumi.CustomResourceOptions</a>)</code></pre>


Create a Environment resource with the given unique name, arguments, and options.

* `name` The _unique_ name of the resource.
* `args` The arguments to use to populate this resource&#39;s properties.
* `opts` A bag of options that control this resource&#39;s behavior.

<h4 class="pdoc-member-header" id="Environment-get">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/environment.ts#L45">method <b>get</b></a>
</h4>


<pre class="highlight"><code><span class='kd'>public static </span>get(name: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>, id: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#ID'>pulumi.ID</a>&gt;, state?: <a href='#EnvironmentState'>EnvironmentState</a>, opts?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions'>pulumi.CustomResourceOptions</a>): <a href='#Environment'>Environment</a></code></pre>


Get an existing Environment resource's state with the given name, ID, and optional extra
properties used to qualify the lookup.

<h4 class="pdoc-member-header" id="Environment-getProvider">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/environment.ts#L35">method <b>getProvider</b></a>
</h4>


<pre class="highlight"><code><span class='kd'></span>getProvider(moduleMember: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>): <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#ProviderResource'>ProviderResource</a> | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span></code></pre>

<h4 class="pdoc-member-header" id="Environment-isInstance">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/environment.ts#L56">method <b>isInstance</b></a>
</h4>


<pre class="highlight"><code><span class='kd'>public static </span>isInstance(obj: <span class='kd'><a href='https://www.typescriptlang.org/docs/handbook/basic-types.html#any'>any</a></span>): obj is Environment</code></pre>


Returns true if the given object is an instance of Environment.  This is designed to work even
when multiple copies of the Pulumi SDK have been loaded into the same process.

<h4 class="pdoc-member-header" id="Environment-config">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/environment.ts#L66">property <b>config</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>config: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/gcp/types/output/#EnvironmentConfig'>EnvironmentConfig</a>&gt;;</code></pre>

Configuration parameters for this environment  Structure is documented below.

<h4 class="pdoc-member-header" id="Environment-id">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/environment.ts#L35">property <b>id</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>id: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>Output</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#ID'>ID</a>&gt;;</code></pre>

id is the provider-assigned unique ID for this managed resource.  It is set during
deployments and may be missing (undefined) during planning phases.

<h4 class="pdoc-member-header" id="Environment-labels">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/environment.ts#L78">property <b>labels</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>labels: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;{[key: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>]: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>} | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span>&gt;;</code></pre>

User-defined labels for this environment. The labels map can contain
no more than 64 entries. Entries of the labels map are UTF8 strings
that comply with the following restrictions:
Label keys must be between 1 and 63 characters long and must conform
to the following regular expression: `a-z?`.
Label values must be between 0 and 63 characters long and must
conform to the regular expression `(a-z?)?`.
No more than 64 labels can be associated with a given environment.
Both keys and values must be <= 128 bytes in size.

<h4 class="pdoc-member-header" id="Environment-name">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/environment.ts#L82">property <b>name</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>name: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

Name of the environment

<h4 class="pdoc-member-header" id="Environment-project">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/environment.ts#L87">property <b>project</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>project: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.

<h4 class="pdoc-member-header" id="Environment-region">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/environment.ts#L91">property <b>region</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>region: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span> | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span>&gt;;</code></pre>

The location or Compute Engine region for the environment.

<h4 class="pdoc-member-header" id="Environment-urn">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/environment.ts#L35">property <b>urn</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>urn: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>Output</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#URN'>URN</a>&gt;;</code></pre>

urn is the stable logical URN used to distinctly address a resource, both before and after
deployments.


<h2 id="functions">Functions</h2>
<h3 class="pdoc-module-header" id="getImageVersions" data-link-title="getImageVersions">
    <a href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/getImageVersions.ts#L12">
        Function <strong>getImageVersions</strong>
    </a>
</h3>


<pre class="highlight"><code><span class='kd'></span>getImageVersions(args?: <a href='#GetImageVersionsArgs'>GetImageVersionsArgs</a>, opts?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#InvokeOptions'>pulumi.InvokeOptions</a>): <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise'>Promise</a>&lt;<a href='#GetImageVersionsResult'>GetImageVersionsResult</a>&gt;</code></pre>


Provides access to available Cloud Composer versions in a region for a given project.


<h2 id="apis">Others</h2>
<h3 class="pdoc-module-header" id="EnvironmentArgs" data-link-title="EnvironmentArgs">
    <a href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/environment.ts#L167">
        interface <strong>EnvironmentArgs</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kr'>interface</span> <span class='nx'>EnvironmentArgs</span></code></pre>

The set of arguments for constructing a Environment resource.

<h4 class="pdoc-member-header" id="EnvironmentArgs-config">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/environment.ts#L171">property <b>config</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>config?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/gcp/types/input/#EnvironmentConfig'>EnvironmentConfig</a>&gt;;</code></pre>

Configuration parameters for this environment  Structure is documented below.

<h4 class="pdoc-member-header" id="EnvironmentArgs-labels">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/environment.ts#L183">property <b>labels</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>labels?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;{[key: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>]: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;}&gt;;</code></pre>

User-defined labels for this environment. The labels map can contain
no more than 64 entries. Entries of the labels map are UTF8 strings
that comply with the following restrictions:
Label keys must be between 1 and 63 characters long and must conform
to the following regular expression: `a-z?`.
Label values must be between 0 and 63 characters long and must
conform to the regular expression `(a-z?)?`.
No more than 64 labels can be associated with a given environment.
Both keys and values must be <= 128 bytes in size.

<h4 class="pdoc-member-header" id="EnvironmentArgs-name">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/environment.ts#L187">property <b>name</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>name?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

Name of the environment

<h4 class="pdoc-member-header" id="EnvironmentArgs-project">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/environment.ts#L192">property <b>project</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>project?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.

<h4 class="pdoc-member-header" id="EnvironmentArgs-region">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/environment.ts#L196">property <b>region</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>region?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

The location or Compute Engine region for the environment.

<h3 class="pdoc-module-header" id="EnvironmentState" data-link-title="EnvironmentState">
    <a href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/environment.ts#L132">
        interface <strong>EnvironmentState</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kr'>interface</span> <span class='nx'>EnvironmentState</span></code></pre>

Input properties used for looking up and filtering Environment resources.

<h4 class="pdoc-member-header" id="EnvironmentState-config">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/environment.ts#L136">property <b>config</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>config?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/gcp/types/input/#EnvironmentConfig'>EnvironmentConfig</a>&gt;;</code></pre>

Configuration parameters for this environment  Structure is documented below.

<h4 class="pdoc-member-header" id="EnvironmentState-labels">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/environment.ts#L148">property <b>labels</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>labels?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;{[key: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>]: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;}&gt;;</code></pre>

User-defined labels for this environment. The labels map can contain
no more than 64 entries. Entries of the labels map are UTF8 strings
that comply with the following restrictions:
Label keys must be between 1 and 63 characters long and must conform
to the following regular expression: `a-z?`.
Label values must be between 0 and 63 characters long and must
conform to the regular expression `(a-z?)?`.
No more than 64 labels can be associated with a given environment.
Both keys and values must be <= 128 bytes in size.

<h4 class="pdoc-member-header" id="EnvironmentState-name">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/environment.ts#L152">property <b>name</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>name?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

Name of the environment

<h4 class="pdoc-member-header" id="EnvironmentState-project">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/environment.ts#L157">property <b>project</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>project?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.

<h4 class="pdoc-member-header" id="EnvironmentState-region">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/environment.ts#L161">property <b>region</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>region?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

The location or Compute Engine region for the environment.

<h3 class="pdoc-module-header" id="GetImageVersionsArgs" data-link-title="GetImageVersionsArgs">
    <a href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/getImageVersions.ts#L30">
        interface <strong>GetImageVersionsArgs</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kr'>interface</span> <span class='nx'>GetImageVersionsArgs</span></code></pre>

A collection of arguments for invoking getImageVersions.

<h4 class="pdoc-member-header" id="GetImageVersionsArgs-project">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/getImageVersions.ts#L35">property <b>project</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>project?: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span> | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;</code></pre>

The ID of the project to list versions in.
If it is not provided, the provider project is used.

<h4 class="pdoc-member-header" id="GetImageVersionsArgs-region">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/getImageVersions.ts#L40">property <b>region</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>region?: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span> | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;</code></pre>

The location to list versions in.
If it is not provider, the provider region is used.

<h3 class="pdoc-module-header" id="GetImageVersionsResult" data-link-title="GetImageVersionsResult">
    <a href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/getImageVersions.ts#L46">
        interface <strong>GetImageVersionsResult</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kr'>interface</span> <span class='nx'>GetImageVersionsResult</span></code></pre>

A collection of values returned by getImageVersions.

<h4 class="pdoc-member-header" id="GetImageVersionsResult-id">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/getImageVersions.ts#L50">property <b>id</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>id: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;</code></pre>

The provider-assigned unique ID for this managed resource.

<h4 class="pdoc-member-header" id="GetImageVersionsResult-imageVersions">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/getImageVersions.ts#L54">property <b>imageVersions</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>imageVersions: <a href='/docs/reference/pkg/nodejs/pulumi/gcp/types/output/#GetImageVersionsImageVersion'>GetImageVersionsImageVersion</a>[];</code></pre>

A list of composer image versions available in the given project and location. Each `imageVersion` contains:

<h4 class="pdoc-member-header" id="GetImageVersionsResult-project">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/getImageVersions.ts#L55">property <b>project</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>project: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;</code></pre>
<h4 class="pdoc-member-header" id="GetImageVersionsResult-region">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/0c46c212e5430badafa0a4a775d8fb5b6926e30e/sdk/nodejs/composer/getImageVersions.ts#L56">property <b>region</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>region: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;</code></pre>
