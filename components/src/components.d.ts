/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  ChooserKey,
  ChooserMode,
  ChooserType,
} from './components/chooser/chooser';
import {
  ChooserKey as ChooserKey1,
  ChooserMode as ChooserMode1,
  ChooserOptionStyle,
  ChooserType as ChooserType1,
} from './components/chooser/chooser';
import {
  SourceKind,
} from './components/convert/convert';

export namespace Components {
  interface PulumiBanner {
    'dismissible': boolean;
    'name': string;
    'visible': boolean;
  }
  interface PulumiChoosable {
    'mode': ChooserMode;
    'selection': ChooserKey;
    'type': ChooserType;
    'value': ChooserKey;
    'values': ChooserKey;
  }
  interface PulumiChooser {
    'mode': ChooserMode;
    'optionStyle': ChooserOptionStyle;
    'options': string;
    'selection': ChooserKey;
    'type': ChooserType;
  }
  interface PulumiConvert {
    'endpoint': string;
    'examples': string;
    'from': SourceKind;
    'theme': string;
  }
  interface PulumiExample {}
  interface PulumiExamples {}
  interface PulumiRoot {}
  interface PulumiTooltip {
    'hide': () => Promise<unknown>;
    'show': () => Promise<unknown>;
  }
  interface PulumiTopButton {}
}

declare global {


  interface HTMLPulumiBannerElement extends Components.PulumiBanner, HTMLStencilElement {}
  var HTMLPulumiBannerElement: {
    prototype: HTMLPulumiBannerElement;
    new (): HTMLPulumiBannerElement;
  };

  interface HTMLPulumiChoosableElement extends Components.PulumiChoosable, HTMLStencilElement {}
  var HTMLPulumiChoosableElement: {
    prototype: HTMLPulumiChoosableElement;
    new (): HTMLPulumiChoosableElement;
  };

  interface HTMLPulumiChooserElement extends Components.PulumiChooser, HTMLStencilElement {}
  var HTMLPulumiChooserElement: {
    prototype: HTMLPulumiChooserElement;
    new (): HTMLPulumiChooserElement;
  };

  interface HTMLPulumiConvertElement extends Components.PulumiConvert, HTMLStencilElement {}
  var HTMLPulumiConvertElement: {
    prototype: HTMLPulumiConvertElement;
    new (): HTMLPulumiConvertElement;
  };

  interface HTMLPulumiExampleElement extends Components.PulumiExample, HTMLStencilElement {}
  var HTMLPulumiExampleElement: {
    prototype: HTMLPulumiExampleElement;
    new (): HTMLPulumiExampleElement;
  };

  interface HTMLPulumiExamplesElement extends Components.PulumiExamples, HTMLStencilElement {}
  var HTMLPulumiExamplesElement: {
    prototype: HTMLPulumiExamplesElement;
    new (): HTMLPulumiExamplesElement;
  };

  interface HTMLPulumiRootElement extends Components.PulumiRoot, HTMLStencilElement {}
  var HTMLPulumiRootElement: {
    prototype: HTMLPulumiRootElement;
    new (): HTMLPulumiRootElement;
  };

  interface HTMLPulumiTooltipElement extends Components.PulumiTooltip, HTMLStencilElement {}
  var HTMLPulumiTooltipElement: {
    prototype: HTMLPulumiTooltipElement;
    new (): HTMLPulumiTooltipElement;
  };

  interface HTMLPulumiTopButtonElement extends Components.PulumiTopButton, HTMLStencilElement {}
  var HTMLPulumiTopButtonElement: {
    prototype: HTMLPulumiTopButtonElement;
    new (): HTMLPulumiTopButtonElement;
  };
  interface HTMLElementTagNameMap {
    'pulumi-banner': HTMLPulumiBannerElement;
    'pulumi-choosable': HTMLPulumiChoosableElement;
    'pulumi-chooser': HTMLPulumiChooserElement;
    'pulumi-convert': HTMLPulumiConvertElement;
    'pulumi-example': HTMLPulumiExampleElement;
    'pulumi-examples': HTMLPulumiExamplesElement;
    'pulumi-root': HTMLPulumiRootElement;
    'pulumi-tooltip': HTMLPulumiTooltipElement;
    'pulumi-top-button': HTMLPulumiTopButtonElement;
  }
}

declare namespace LocalJSX {
  interface PulumiBanner {
    'dismissible'?: boolean;
    'name'?: string;
    'visible'?: boolean;
  }
  interface PulumiChoosable {
    'mode'?: ChooserMode;
    'selection'?: ChooserKey;
    'type'?: ChooserType;
    'value'?: ChooserKey;
    'values'?: ChooserKey;
  }
  interface PulumiChooser {
    'mode'?: ChooserMode;
    'optionStyle'?: ChooserOptionStyle;
    'options'?: string;
    'selection'?: ChooserKey;
    'type'?: ChooserType;
  }
  interface PulumiConvert {
    'endpoint'?: string;
    'examples'?: string;
    'from'?: SourceKind;
    'theme'?: string;
  }
  interface PulumiExample {}
  interface PulumiExamples {}
  interface PulumiRoot {
    'onRendered'?: (event: CustomEvent<any>) => void;
  }
  interface PulumiTooltip {}
  interface PulumiTopButton {}

  interface IntrinsicElements {
    'pulumi-banner': PulumiBanner;
    'pulumi-choosable': PulumiChoosable;
    'pulumi-chooser': PulumiChooser;
    'pulumi-convert': PulumiConvert;
    'pulumi-example': PulumiExample;
    'pulumi-examples': PulumiExamples;
    'pulumi-root': PulumiRoot;
    'pulumi-tooltip': PulumiTooltip;
    'pulumi-top-button': PulumiTopButton;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'pulumi-banner': LocalJSX.PulumiBanner & JSXBase.HTMLAttributes<HTMLPulumiBannerElement>;
      'pulumi-choosable': LocalJSX.PulumiChoosable & JSXBase.HTMLAttributes<HTMLPulumiChoosableElement>;
      'pulumi-chooser': LocalJSX.PulumiChooser & JSXBase.HTMLAttributes<HTMLPulumiChooserElement>;
      'pulumi-convert': LocalJSX.PulumiConvert & JSXBase.HTMLAttributes<HTMLPulumiConvertElement>;
      'pulumi-example': LocalJSX.PulumiExample & JSXBase.HTMLAttributes<HTMLPulumiExampleElement>;
      'pulumi-examples': LocalJSX.PulumiExamples & JSXBase.HTMLAttributes<HTMLPulumiExamplesElement>;
      'pulumi-root': LocalJSX.PulumiRoot & JSXBase.HTMLAttributes<HTMLPulumiRootElement>;
      'pulumi-tooltip': LocalJSX.PulumiTooltip & JSXBase.HTMLAttributes<HTMLPulumiTooltipElement>;
      'pulumi-top-button': LocalJSX.PulumiTopButton & JSXBase.HTMLAttributes<HTMLPulumiTopButtonElement>;
    }
  }
}


