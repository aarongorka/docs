
---
title: "Firewall"
block_external_search_index: true
---



Provides a DigitalOcean Cloud Firewall resource. This can be used to create,
modify, and delete Firewalls.

> This content is derived from https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/website/docs/r/firewall.html.markdown.



## Create a Firewall Resource

{{< chooser language "javascript,typescript,python,go,csharp" / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">new </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/digitalocean/#Firewall">Firewall</a></span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">args</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/digitalocean/#FirewallArgs">FirewallArgs</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">pulumi.CustomResourceOptions</a></span><span class="p">);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">def </span><span class="nf">Firewall</span><span class="p">(resource_name, opts=None, </span>droplet_ids=None<span class="p">, </span>inbound_rules=None<span class="p">, </span>name=None<span class="p">, </span>outbound_rules=None<span class="p">, </span>tags=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>NewFirewall<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/go/pulumi?tab=doc#Context">pulumi.Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">args</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-digitalocean/sdk/go/digitalocean/?tab=doc#FirewallArgs">FirewallArgs</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/go/pulumi?tab=doc#ResourceOption">pulumi.ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-digitalocean/sdk/go/digitalocean/?tab=doc#Firewall">Firewall</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Digitalocean/Pulumi.Digitalocean..Firewall.html">Firewall</a></span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Digitalocean/Pulumi.Digitalocean.FirewallArgs.html">FirewallArgs</a></span>? <span class="nx">args = null<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language nodejs %}}

<dl class="resources-properties">
    <dt class="property-required" title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The unique name of the resource.</dd>
    <dt class="property-optional" title="Optional">
        <span>args</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The arguments to use to populate this resource's properties.</dd>
    <dt class="property-optional" title="Optional">
        <span>opts</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>A bag of options that control this resource's behavior.</dd>
</dl>

{{% /choosable %}}

{{% choosable language python %}}
<dl class="resources-properties">
    <dt class="property-required" title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The unique name of the resource.</dd>
    <dt class="property-optional" title="Optional">
        <span>opts</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>A bag of options that control this resource's behavior.</dd>
</dl>
{{% /choosable %}}

{{% choosable language go %}}

<dl class="resources-properties">
    <dt class="property-required" title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The unique name of the resource.</dd>
    <dt class="property-optional" title="Optional">
        <span>args</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The arguments to use to populate this resource's properties.</dd>
    <dt class="property-optional" title="Optional">
        <span>opts</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>A bag of options that control this resource's behavior.</dd>
</dl>

{{% /choosable %}}

{{% choosable language csharp %}}

<dl class="resources-properties">
    <dt class="property-required" title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The unique name of the resource.</dd>
    <dt class="property-optional" title="Optional">
        <span>args</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The arguments to use to populate this resource's properties.</dd>
    <dt class="property-optional" title="Optional">
        <span>opts</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>A bag of options that control this resource's behavior.</dd>
</dl>

{{% /choosable %}}

#### Resource Arguments




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Droplet<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type">List<int>?</span>
    </dt>
    <dd>{{% md %}}The list of the IDs of the Droplets assigned
to the Firewall.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Inbound<wbr>Rules</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewallinboundrule">List&lt;Firewall<wbr>Inbound<wbr>Rule<wbr>Args&gt;?</a></span>
    </dt>
    <dd>{{% md %}}The inbound access rule block for the Firewall.
The `inbound_rule` block is documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}The Firewall name
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Outbound<wbr>Rules</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewalloutboundrule">List&lt;Firewall<wbr>Outbound<wbr>Rule<wbr>Args&gt;?</a></span>
    </dt>
    <dd>{{% md %}}The outbound access rule block for the Firewall.
The `outbound_rule` block is documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">List<string>?</span>
    </dt>
    <dd>{{% md %}}The names of the Tags assigned to the Firewall.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Droplet<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]int</span>
    </dt>
    <dd>{{% md %}}The list of the IDs of the Droplets assigned
to the Firewall.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Inbound<wbr>Rules</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewallinboundrule">[]Firewall<wbr>Inbound<wbr>Rule</a></span>
    </dt>
    <dd>{{% md %}}The inbound access rule block for the Firewall.
The `inbound_rule` block is documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type">*string</span>
    </dt>
    <dd>{{% md %}}The Firewall name
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Outbound<wbr>Rules</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewalloutboundrule">[]Firewall<wbr>Outbound<wbr>Rule</a></span>
    </dt>
    <dd>{{% md %}}The outbound access rule block for the Firewall.
The `outbound_rule` block is documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]string</span>
    </dt>
    <dd>{{% md %}}The names of the Tags assigned to the Firewall.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>droplet<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type">number[]?</span>
    </dt>
    <dd>{{% md %}}The list of the IDs of the Droplets assigned
to the Firewall.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>inbound<wbr>Rules</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewallinboundrule">Firewall<wbr>Inbound<wbr>Rule[]?</a></span>
    </dt>
    <dd>{{% md %}}The inbound access rule block for the Firewall.
The `inbound_rule` block is documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}The Firewall name
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>outbound<wbr>Rules</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewalloutboundrule">Firewall<wbr>Outbound<wbr>Rule[]?</a></span>
    </dt>
    <dd>{{% md %}}The outbound access rule block for the Firewall.
The `outbound_rule` block is documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">string[]?</span>
    </dt>
    <dd>{{% md %}}The names of the Tags assigned to the Firewall.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>droplet_<wbr>ids</span>
        <span class="property-indicator"></span>
        <span class="property-type">List[Integer]</span>
    </dt>
    <dd>{{% md %}}The list of the IDs of the Droplets assigned
to the Firewall.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>inbound_<wbr>rules</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewallinboundrule">List[Firewall<wbr>Inbound<wbr>Rule]</a></span>
    </dt>
    <dd>{{% md %}}The inbound access rule block for the Firewall.
The `inbound_rule` block is documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}The Firewall name
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>outbound_<wbr>rules</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewalloutboundrule">List[Firewall<wbr>Outbound<wbr>Rule]</a></span>
    </dt>
    <dd>{{% md %}}The outbound access rule block for the Firewall.
The `outbound_rule` block is documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">List[str]</span>
    </dt>
    <dd>{{% md %}}The names of the Tags assigned to the Firewall.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}







## Firewall Output Properties

The following output properties are available:




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>Created<wbr>At</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}A time value given in ISO8601 combined date and time format
that represents when the Firewall was created.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Droplet<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type">List<int>?</span>
    </dt>
    <dd>{{% md %}}The list of the IDs of the Droplets assigned
to the Firewall.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Inbound<wbr>Rules</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewallinboundrule">List&lt;Firewall<wbr>Inbound<wbr>Rule&gt;?</a></span>
    </dt>
    <dd>{{% md %}}The inbound access rule block for the Firewall.
The `inbound_rule` block is documented below.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}The Firewall name
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Outbound<wbr>Rules</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewalloutboundrule">List&lt;Firewall<wbr>Outbound<wbr>Rule&gt;?</a></span>
    </dt>
    <dd>{{% md %}}The outbound access rule block for the Firewall.
The `outbound_rule` block is documented below.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Pending<wbr>Changes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewallpendingchange">List&lt;Firewall<wbr>Pending<wbr>Change&gt;</a></span>
    </dt>
    <dd>{{% md %}}An list of object containing the fields, "droplet_id",
"removing", and "status".  It is provided to detail exactly which Droplets
are having their security policies updated.  When empty, all changes
have been successfully applied.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Status</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}A status string indicating the current state of the Firewall.
This can be "waiting", "succeeded", or "failed".
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">List<string>?</span>
    </dt>
    <dd>{{% md %}}The names of the Tags assigned to the Firewall.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>Created<wbr>At</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}A time value given in ISO8601 combined date and time format
that represents when the Firewall was created.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Droplet<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]int</span>
    </dt>
    <dd>{{% md %}}The list of the IDs of the Droplets assigned
to the Firewall.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Inbound<wbr>Rules</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewallinboundrule">[]Firewall<wbr>Inbound<wbr>Rule</a></span>
    </dt>
    <dd>{{% md %}}The inbound access rule block for the Firewall.
The `inbound_rule` block is documented below.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}The Firewall name
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Outbound<wbr>Rules</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewalloutboundrule">[]Firewall<wbr>Outbound<wbr>Rule</a></span>
    </dt>
    <dd>{{% md %}}The outbound access rule block for the Firewall.
The `outbound_rule` block is documented below.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Pending<wbr>Changes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewallpendingchange">[]Firewall<wbr>Pending<wbr>Change</a></span>
    </dt>
    <dd>{{% md %}}An list of object containing the fields, "droplet_id",
"removing", and "status".  It is provided to detail exactly which Droplets
are having their security policies updated.  When empty, all changes
have been successfully applied.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Status</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}A status string indicating the current state of the Firewall.
This can be "waiting", "succeeded", or "failed".
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]string</span>
    </dt>
    <dd>{{% md %}}The names of the Tags assigned to the Firewall.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>created<wbr>At</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}A time value given in ISO8601 combined date and time format
that represents when the Firewall was created.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>droplet<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type">number[]?</span>
    </dt>
    <dd>{{% md %}}The list of the IDs of the Droplets assigned
to the Firewall.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>inbound<wbr>Rules</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewallinboundrule">Firewall<wbr>Inbound<wbr>Rule[]?</a></span>
    </dt>
    <dd>{{% md %}}The inbound access rule block for the Firewall.
The `inbound_rule` block is documented below.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}The Firewall name
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>outbound<wbr>Rules</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewalloutboundrule">Firewall<wbr>Outbound<wbr>Rule[]?</a></span>
    </dt>
    <dd>{{% md %}}The outbound access rule block for the Firewall.
The `outbound_rule` block is documented below.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>pending<wbr>Changes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewallpendingchange">Firewall<wbr>Pending<wbr>Change[]</a></span>
    </dt>
    <dd>{{% md %}}An list of object containing the fields, "droplet_id",
"removing", and "status".  It is provided to detail exactly which Droplets
are having their security policies updated.  When empty, all changes
have been successfully applied.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>status</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}A status string indicating the current state of the Firewall.
This can be "waiting", "succeeded", or "failed".
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">string[]?</span>
    </dt>
    <dd>{{% md %}}The names of the Tags assigned to the Firewall.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>created_<wbr>at</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}A time value given in ISO8601 combined date and time format
that represents when the Firewall was created.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>droplet_<wbr>ids</span>
        <span class="property-indicator"></span>
        <span class="property-type">List[Integer]</span>
    </dt>
    <dd>{{% md %}}The list of the IDs of the Droplets assigned
to the Firewall.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>inbound_<wbr>rules</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewallinboundrule">List[Firewall<wbr>Inbound<wbr>Rule]</a></span>
    </dt>
    <dd>{{% md %}}The inbound access rule block for the Firewall.
The `inbound_rule` block is documented below.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}The Firewall name
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>outbound_<wbr>rules</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewalloutboundrule">List[Firewall<wbr>Outbound<wbr>Rule]</a></span>
    </dt>
    <dd>{{% md %}}The outbound access rule block for the Firewall.
The `outbound_rule` block is documented below.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>pending_<wbr>changes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewallpendingchange">List[Firewall<wbr>Pending<wbr>Change]</a></span>
    </dt>
    <dd>{{% md %}}An list of object containing the fields, "droplet_id",
"removing", and "status".  It is provided to detail exactly which Droplets
are having their security policies updated.  When empty, all changes
have been successfully applied.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>status</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}A status string indicating the current state of the Firewall.
This can be "waiting", "succeeded", or "failed".
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">List[str]</span>
    </dt>
    <dd>{{% md %}}The names of the Tags assigned to the Firewall.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}








## Look up an Existing Firewall Resource

Get an existing Firewall resource's state with the given name, ID, and optional extra properties used to qualify the lookup.

{{< chooser language "javascript,typescript,python,go,csharp  " / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">public static </span><span class="nf">get</span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">id</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#ID">Input&lt;ID&gt;</a></span><span class="p">, </span><span class="nx">state</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/digitalocean/#FirewallState">FirewallState</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">): </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/digitalocean/#Firewall">Firewall</a></span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">static </span><span class="nf">get</span><span class="p">(resource_name, id, opts=None, </span>created_at=None<span class="p">, </span>droplet_ids=None<span class="p">, </span>inbound_rules=None<span class="p">, </span>name=None<span class="p">, </span>outbound_rules=None<span class="p">, </span>pending_changes=None<span class="p">, </span>status=None<span class="p">, </span>tags=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>GetFirewall<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">id</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/go/pulumi?tab=doc#IDInput">IDInput</a></span><span class="p">, </span><span class="nx">state</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-digitalocean/sdk/go/digitalocean/?tab=doc#FirewallState">FirewallState</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-digitalocean/sdk/go/digitalocean/?tab=doc#Firewall">Firewall</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public static </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Digitalocean/Pulumi.Digitalocean..Firewall.html">Firewall</a></span><span class="nf"> Get</span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.Input.html">Input&lt;string&gt;</a></span> <span class="nx">id<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Digitalocean/Pulumi.Digitalocean..FirewallState.html">FirewallState</a></span>? <span class="nx">state<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language nodejs %}}

<dl class="resources-properties">
    <dt class="property-required" title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The unique name of the resulting resource.</dd>
    <dt class="property-required" title="Required">
        <span>id</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The <em>unique</em> provider ID of the resource to lookup.</dd>
    <dt class="property-optional" title="Optional">
        <span>state</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>Any extra arguments used during the lookup.</dd>
    <dt class="property-optional" title="Optional">
        <span>opts</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>A bag of options that control this resource's behavior.</dd>
</dl>

{{% /choosable %}}

{{% choosable language python %}}
<dl class="resources-properties">
    <dt class="property-required" title="Required">
        <span>resource_name</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The unique name of the resulting resource.</dd>
    <dt class="property-required" title="Optional">
        <span>id</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The <em>unique</em> provider ID of the resource to lookup.</dd>
</dl>
{{% /choosable %}}

{{% choosable language go %}}

<dl class="resources-properties">
    <dt class="property-required" title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The unique name of the resulting resource.</dd>
    <dt class="property-required" title="Required">
        <span>id</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The <em>unique</em> provider ID of the resource to lookup.</dd>
    <dt class="property-optional" title="Optional">
        <span>state</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>Any extra arguments used during the lookup.</dd>
    <dt class="property-optional" title="Optional">
        <span>opts</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>A bag of options that control this resource's behavior.</dd>
</dl>

{{% /choosable %}}

{{% choosable language csharp %}}

<dl class="resources-properties">
    <dt class="property-required" title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The unique name of the resulting resource.</dd>
    <dt class="property-required" title="Required">
        <span>id</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The <em>unique</em> provider ID of the resource to lookup.</dd>
    <dt class="property-optional" title="Optional">
        <span>state</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>Any extra arguments used during the lookup.</dd>
    <dt class="property-optional" title="Optional">
        <span>opts</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>A bag of options that control this resource's behavior.</dd>
</dl>

{{% /choosable %}}

The following state arguments are supported:



{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Created<wbr>At</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}A time value given in ISO8601 combined date and time format
that represents when the Firewall was created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Droplet<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type">List<int>?</span>
    </dt>
    <dd>{{% md %}}The list of the IDs of the Droplets assigned
to the Firewall.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Inbound<wbr>Rules</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewallinboundrule">List&lt;Firewall<wbr>Inbound<wbr>Rule<wbr>Args&gt;?</a></span>
    </dt>
    <dd>{{% md %}}The inbound access rule block for the Firewall.
The `inbound_rule` block is documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}The Firewall name
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Outbound<wbr>Rules</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewalloutboundrule">List&lt;Firewall<wbr>Outbound<wbr>Rule<wbr>Args&gt;?</a></span>
    </dt>
    <dd>{{% md %}}The outbound access rule block for the Firewall.
The `outbound_rule` block is documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Pending<wbr>Changes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewallpendingchange">List&lt;Firewall<wbr>Pending<wbr>Change<wbr>Args&gt;?</a></span>
    </dt>
    <dd>{{% md %}}An list of object containing the fields, "droplet_id",
"removing", and "status".  It is provided to detail exactly which Droplets
are having their security policies updated.  When empty, all changes
have been successfully applied.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Status</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}A status string indicating the current state of the Firewall.
This can be "waiting", "succeeded", or "failed".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">List<string>?</span>
    </dt>
    <dd>{{% md %}}The names of the Tags assigned to the Firewall.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Created<wbr>At</span>
        <span class="property-indicator"></span>
        <span class="property-type">*string</span>
    </dt>
    <dd>{{% md %}}A time value given in ISO8601 combined date and time format
that represents when the Firewall was created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Droplet<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]int</span>
    </dt>
    <dd>{{% md %}}The list of the IDs of the Droplets assigned
to the Firewall.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Inbound<wbr>Rules</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewallinboundrule">[]Firewall<wbr>Inbound<wbr>Rule</a></span>
    </dt>
    <dd>{{% md %}}The inbound access rule block for the Firewall.
The `inbound_rule` block is documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type">*string</span>
    </dt>
    <dd>{{% md %}}The Firewall name
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Outbound<wbr>Rules</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewalloutboundrule">[]Firewall<wbr>Outbound<wbr>Rule</a></span>
    </dt>
    <dd>{{% md %}}The outbound access rule block for the Firewall.
The `outbound_rule` block is documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Pending<wbr>Changes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewallpendingchange">[]Firewall<wbr>Pending<wbr>Change</a></span>
    </dt>
    <dd>{{% md %}}An list of object containing the fields, "droplet_id",
"removing", and "status".  It is provided to detail exactly which Droplets
are having their security policies updated.  When empty, all changes
have been successfully applied.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Status</span>
        <span class="property-indicator"></span>
        <span class="property-type">*string</span>
    </dt>
    <dd>{{% md %}}A status string indicating the current state of the Firewall.
This can be "waiting", "succeeded", or "failed".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]string</span>
    </dt>
    <dd>{{% md %}}The names of the Tags assigned to the Firewall.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>created<wbr>At</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}A time value given in ISO8601 combined date and time format
that represents when the Firewall was created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>droplet<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type">number[]?</span>
    </dt>
    <dd>{{% md %}}The list of the IDs of the Droplets assigned
to the Firewall.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>inbound<wbr>Rules</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewallinboundrule">Firewall<wbr>Inbound<wbr>Rule[]?</a></span>
    </dt>
    <dd>{{% md %}}The inbound access rule block for the Firewall.
The `inbound_rule` block is documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}The Firewall name
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>outbound<wbr>Rules</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewalloutboundrule">Firewall<wbr>Outbound<wbr>Rule[]?</a></span>
    </dt>
    <dd>{{% md %}}The outbound access rule block for the Firewall.
The `outbound_rule` block is documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>pending<wbr>Changes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewallpendingchange">Firewall<wbr>Pending<wbr>Change[]?</a></span>
    </dt>
    <dd>{{% md %}}An list of object containing the fields, "droplet_id",
"removing", and "status".  It is provided to detail exactly which Droplets
are having their security policies updated.  When empty, all changes
have been successfully applied.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>status</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}A status string indicating the current state of the Firewall.
This can be "waiting", "succeeded", or "failed".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">string[]?</span>
    </dt>
    <dd>{{% md %}}The names of the Tags assigned to the Firewall.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>created_<wbr>at</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}A time value given in ISO8601 combined date and time format
that represents when the Firewall was created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>droplet_<wbr>ids</span>
        <span class="property-indicator"></span>
        <span class="property-type">List[Integer]</span>
    </dt>
    <dd>{{% md %}}The list of the IDs of the Droplets assigned
to the Firewall.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>inbound_<wbr>rules</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewallinboundrule">List[Firewall<wbr>Inbound<wbr>Rule]</a></span>
    </dt>
    <dd>{{% md %}}The inbound access rule block for the Firewall.
The `inbound_rule` block is documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}The Firewall name
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>outbound_<wbr>rules</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewalloutboundrule">List[Firewall<wbr>Outbound<wbr>Rule]</a></span>
    </dt>
    <dd>{{% md %}}The outbound access rule block for the Firewall.
The `outbound_rule` block is documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>pending_<wbr>changes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#firewallpendingchange">List[Firewall<wbr>Pending<wbr>Change]</a></span>
    </dt>
    <dd>{{% md %}}An list of object containing the fields, "droplet_id",
"removing", and "status".  It is provided to detail exactly which Droplets
are having their security policies updated.  When empty, all changes
have been successfully applied.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>status</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}A status string indicating the current state of the Firewall.
This can be "waiting", "succeeded", or "failed".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">List[str]</span>
    </dt>
    <dd>{{% md %}}The names of the Tags assigned to the Firewall.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}










## Supporting Types

<h4>Firewall<wbr>Inbound<wbr>Rule</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/digitalocean/types/input/#FirewallInboundRule">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/digitalocean/types/output/#FirewallInboundRule">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-digitalocean/sdk/go/digitalocean/?tab=doc#FirewallInboundRuleArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-digitalocean/sdk/go/digitalocean/?tab=doc#FirewallInboundRuleOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Port<wbr>Range</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}The ports on which traffic will be allowed
specified as a string containing a single port, a range (e.g. "8000-9000"),
or "1-65535" to open all ports for a protocol. Required for when protocol is
`tcp` or `udp`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Protocol</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}The type of traffic to be allowed.
This may be one of "tcp", "udp", or "icmp".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Source<wbr>Addresses</span>
        <span class="property-indicator"></span>
        <span class="property-type">List<string>?</span>
    </dt>
    <dd>{{% md %}}An array of strings containing the IPv4
addresses, IPv6 addresses, IPv4 CIDRs, and/or IPv6 CIDRs from which the
inbound traffic will be accepted.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Source<wbr>Droplet<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type">List<int>?</span>
    </dt>
    <dd>{{% md %}}An array containing the IDs of
the Droplets from which the inbound traffic will be accepted.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Source<wbr>Load<wbr>Balancer<wbr>Uids</span>
        <span class="property-indicator"></span>
        <span class="property-type">List<string>?</span>
    </dt>
    <dd>{{% md %}}An array containing the IDs
of the Load Balancers from which the inbound traffic will be accepted.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Source<wbr>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">List<string>?</span>
    </dt>
    <dd>{{% md %}}An array containing the names of Tags
corresponding to groups of Droplets from which the inbound traffic
will be accepted.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Port<wbr>Range</span>
        <span class="property-indicator"></span>
        <span class="property-type">*string</span>
    </dt>
    <dd>{{% md %}}The ports on which traffic will be allowed
specified as a string containing a single port, a range (e.g. "8000-9000"),
or "1-65535" to open all ports for a protocol. Required for when protocol is
`tcp` or `udp`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Protocol</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}The type of traffic to be allowed.
This may be one of "tcp", "udp", or "icmp".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Source<wbr>Addresses</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]string</span>
    </dt>
    <dd>{{% md %}}An array of strings containing the IPv4
addresses, IPv6 addresses, IPv4 CIDRs, and/or IPv6 CIDRs from which the
inbound traffic will be accepted.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Source<wbr>Droplet<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]int</span>
    </dt>
    <dd>{{% md %}}An array containing the IDs of
the Droplets from which the inbound traffic will be accepted.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Source<wbr>Load<wbr>Balancer<wbr>Uids</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]string</span>
    </dt>
    <dd>{{% md %}}An array containing the IDs
of the Load Balancers from which the inbound traffic will be accepted.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Source<wbr>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]string</span>
    </dt>
    <dd>{{% md %}}An array containing the names of Tags
corresponding to groups of Droplets from which the inbound traffic
will be accepted.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>port<wbr>Range</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}The ports on which traffic will be allowed
specified as a string containing a single port, a range (e.g. "8000-9000"),
or "1-65535" to open all ports for a protocol. Required for when protocol is
`tcp` or `udp`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>protocol</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}The type of traffic to be allowed.
This may be one of "tcp", "udp", or "icmp".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>source<wbr>Addresses</span>
        <span class="property-indicator"></span>
        <span class="property-type">string[]?</span>
    </dt>
    <dd>{{% md %}}An array of strings containing the IPv4
addresses, IPv6 addresses, IPv4 CIDRs, and/or IPv6 CIDRs from which the
inbound traffic will be accepted.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>source<wbr>Droplet<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type">number[]?</span>
    </dt>
    <dd>{{% md %}}An array containing the IDs of
the Droplets from which the inbound traffic will be accepted.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>source<wbr>Load<wbr>Balancer<wbr>Uids</span>
        <span class="property-indicator"></span>
        <span class="property-type">string[]?</span>
    </dt>
    <dd>{{% md %}}An array containing the IDs
of the Load Balancers from which the inbound traffic will be accepted.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>source<wbr>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">string[]?</span>
    </dt>
    <dd>{{% md %}}An array containing the names of Tags
corresponding to groups of Droplets from which the inbound traffic
will be accepted.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>port<wbr>Range</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}The ports on which traffic will be allowed
specified as a string containing a single port, a range (e.g. "8000-9000"),
or "1-65535" to open all ports for a protocol. Required for when protocol is
`tcp` or `udp`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>protocol</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}The type of traffic to be allowed.
This may be one of "tcp", "udp", or "icmp".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>source<wbr>Addresses</span>
        <span class="property-indicator"></span>
        <span class="property-type">List[str]</span>
    </dt>
    <dd>{{% md %}}An array of strings containing the IPv4
addresses, IPv6 addresses, IPv4 CIDRs, and/or IPv6 CIDRs from which the
inbound traffic will be accepted.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>source<wbr>Droplet<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type">List[Integer]</span>
    </dt>
    <dd>{{% md %}}An array containing the IDs of
the Droplets from which the inbound traffic will be accepted.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>source<wbr>Load<wbr>Balancer<wbr>Uids</span>
        <span class="property-indicator"></span>
        <span class="property-type">List[str]</span>
    </dt>
    <dd>{{% md %}}An array containing the IDs
of the Load Balancers from which the inbound traffic will be accepted.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>source<wbr>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">List[str]</span>
    </dt>
    <dd>{{% md %}}An array containing the names of Tags
corresponding to groups of Droplets from which the inbound traffic
will be accepted.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Firewall<wbr>Outbound<wbr>Rule</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/digitalocean/types/input/#FirewallOutboundRule">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/digitalocean/types/output/#FirewallOutboundRule">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-digitalocean/sdk/go/digitalocean/?tab=doc#FirewallOutboundRuleArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-digitalocean/sdk/go/digitalocean/?tab=doc#FirewallOutboundRuleOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Destination<wbr>Addresses</span>
        <span class="property-indicator"></span>
        <span class="property-type">List<string>?</span>
    </dt>
    <dd>{{% md %}}An array of strings containing the IPv4
addresses, IPv6 addresses, IPv4 CIDRs, and/or IPv6 CIDRs to which the
outbound traffic will be allowed.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Destination<wbr>Droplet<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type">List<int>?</span>
    </dt>
    <dd>{{% md %}}An array containing the IDs of
the Droplets to which the outbound traffic will be allowed.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Destination<wbr>Load<wbr>Balancer<wbr>Uids</span>
        <span class="property-indicator"></span>
        <span class="property-type">List<string>?</span>
    </dt>
    <dd>{{% md %}}An array containing the IDs
of the Load Balancers to which the outbound traffic will be allowed.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Destination<wbr>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">List<string>?</span>
    </dt>
    <dd>{{% md %}}An array containing the names of Tags
corresponding to groups of Droplets to which the outbound traffic will
be allowed.
traffic.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Port<wbr>Range</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}The ports on which traffic will be allowed
specified as a string containing a single port, a range (e.g. "8000-9000"),
or "1-65535" to open all ports for a protocol. Required for when protocol is
`tcp` or `udp`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Protocol</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}The type of traffic to be allowed.
This may be one of "tcp", "udp", or "icmp".
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Destination<wbr>Addresses</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]string</span>
    </dt>
    <dd>{{% md %}}An array of strings containing the IPv4
addresses, IPv6 addresses, IPv4 CIDRs, and/or IPv6 CIDRs to which the
outbound traffic will be allowed.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Destination<wbr>Droplet<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]int</span>
    </dt>
    <dd>{{% md %}}An array containing the IDs of
the Droplets to which the outbound traffic will be allowed.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Destination<wbr>Load<wbr>Balancer<wbr>Uids</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]string</span>
    </dt>
    <dd>{{% md %}}An array containing the IDs
of the Load Balancers to which the outbound traffic will be allowed.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Destination<wbr>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">[]string</span>
    </dt>
    <dd>{{% md %}}An array containing the names of Tags
corresponding to groups of Droplets to which the outbound traffic will
be allowed.
traffic.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Port<wbr>Range</span>
        <span class="property-indicator"></span>
        <span class="property-type">*string</span>
    </dt>
    <dd>{{% md %}}The ports on which traffic will be allowed
specified as a string containing a single port, a range (e.g. "8000-9000"),
or "1-65535" to open all ports for a protocol. Required for when protocol is
`tcp` or `udp`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Protocol</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}The type of traffic to be allowed.
This may be one of "tcp", "udp", or "icmp".
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>destination<wbr>Addresses</span>
        <span class="property-indicator"></span>
        <span class="property-type">string[]?</span>
    </dt>
    <dd>{{% md %}}An array of strings containing the IPv4
addresses, IPv6 addresses, IPv4 CIDRs, and/or IPv6 CIDRs to which the
outbound traffic will be allowed.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>destination<wbr>Droplet<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type">number[]?</span>
    </dt>
    <dd>{{% md %}}An array containing the IDs of
the Droplets to which the outbound traffic will be allowed.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>destination<wbr>Load<wbr>Balancer<wbr>Uids</span>
        <span class="property-indicator"></span>
        <span class="property-type">string[]?</span>
    </dt>
    <dd>{{% md %}}An array containing the IDs
of the Load Balancers to which the outbound traffic will be allowed.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>destination<wbr>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">string[]?</span>
    </dt>
    <dd>{{% md %}}An array containing the names of Tags
corresponding to groups of Droplets to which the outbound traffic will
be allowed.
traffic.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>port<wbr>Range</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}The ports on which traffic will be allowed
specified as a string containing a single port, a range (e.g. "8000-9000"),
or "1-65535" to open all ports for a protocol. Required for when protocol is
`tcp` or `udp`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>protocol</span>
        <span class="property-indicator"></span>
        <span class="property-type">string</span>
    </dt>
    <dd>{{% md %}}The type of traffic to be allowed.
This may be one of "tcp", "udp", or "icmp".
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>destination<wbr>Addresses</span>
        <span class="property-indicator"></span>
        <span class="property-type">List[str]</span>
    </dt>
    <dd>{{% md %}}An array of strings containing the IPv4
addresses, IPv6 addresses, IPv4 CIDRs, and/or IPv6 CIDRs to which the
outbound traffic will be allowed.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>destination<wbr>Droplet<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type">List[Integer]</span>
    </dt>
    <dd>{{% md %}}An array containing the IDs of
the Droplets to which the outbound traffic will be allowed.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>destination<wbr>Load<wbr>Balancer<wbr>Uids</span>
        <span class="property-indicator"></span>
        <span class="property-type">List[str]</span>
    </dt>
    <dd>{{% md %}}An array containing the IDs
of the Load Balancers to which the outbound traffic will be allowed.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>destination<wbr>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">List[str]</span>
    </dt>
    <dd>{{% md %}}An array containing the names of Tags
corresponding to groups of Droplets to which the outbound traffic will
be allowed.
traffic.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>port<wbr>Range</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}The ports on which traffic will be allowed
specified as a string containing a single port, a range (e.g. "8000-9000"),
or "1-65535" to open all ports for a protocol. Required for when protocol is
`tcp` or `udp`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>protocol</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}The type of traffic to be allowed.
This may be one of "tcp", "udp", or "icmp".
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Firewall<wbr>Pending<wbr>Change</h4>
{{% choosable language nodejs %}}
> See the   <a href="/docs/reference/pkg/nodejs/pulumi/digitalocean/types/output/#FirewallPendingChange">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the   <a href="https://pkg.go.dev/github.com/pulumi/pulumi-digitalocean/sdk/go/digitalocean/?tab=doc#FirewallPendingChangeOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Droplet<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type">int?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Removing</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Status</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}A status string indicating the current state of the Firewall.
This can be "waiting", "succeeded", or "failed".
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Droplet<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type">*int</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Removing</span>
        <span class="property-indicator"></span>
        <span class="property-type">*bool</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Status</span>
        <span class="property-indicator"></span>
        <span class="property-type">*string</span>
    </dt>
    <dd>{{% md %}}A status string indicating the current state of the Firewall.
This can be "waiting", "succeeded", or "failed".
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>droplet<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type">number?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>removing</span>
        <span class="property-indicator"></span>
        <span class="property-type">boolean?</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>status</span>
        <span class="property-indicator"></span>
        <span class="property-type">string?</span>
    </dt>
    <dd>{{% md %}}A status string indicating the current state of the Firewall.
This can be "waiting", "succeeded", or "failed".
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>droplet_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type">float</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>removing</span>
        <span class="property-indicator"></span>
        <span class="property-type">bool</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>status</span>
        <span class="property-indicator"></span>
        <span class="property-type">str</span>
    </dt>
    <dd>{{% md %}}A status string indicating the current state of the Firewall.
This can be "waiting", "succeeded", or "failed".
{{% /md %}}</dd>

</dl>
{{% /choosable %}}









<h3>Package Details</h3>
<dl class="package-details">
	<dt>Repository</dt>
	<dd><a href="https://github.com/pulumi/pulumi-digitalocean">https://github.com/pulumi/pulumi-digitalocean</a></dd>
	<dt>License</dt>
	<dd>Apache-2.0</dd>
    
</dl>
