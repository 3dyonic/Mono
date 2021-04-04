# Spacing System Analysis

## Spacing unit and Spacing array
* There is no spacing unit identified.
* Very hard to establish a unit based pattern. E.g: 8px or 0.5rem as common conventions or relationships between breakpoints.
    * a common example is:
  ````scss
  $spacer: 0.5rem; //8px
  $spacing-1:  (0.5 * $spacer); // 4px
  $spacing-2:  $spacer;
  $spacing-3:  (1.25 * $spacer); //10px
  $spacing-4:  (1.5 * $spacer); //12px
  ````
    * This can also include Custom properties
    ````
  :root{
  --spacer: 0.5rem; //8px
  --spacing-1: calc(0.5 * var(--spacer)); // 4px
  --spacing-2: var(--spacer);
  --spacing-3: calc(1.25 * var(--spacer)); //10px
  --spacing-4:  calc(1.5 * var(--spacer)); //12px
  }
  ````
  
## Responsive Spacing
* Responsive spacing changes are not common but can be very useful in global consistent scaling.
  below are some points to discuss:
    * In XS
      * spacing 1 and 2 are the same.
      * spacing 6 is smaller than spacings 4,5.  
        * this is non-conventional, it makes numbering redundant and un systematic.
        * we Usually advise against such patterns. 
    * IN SM
      * Spacing 2,3 are larger than LG values but 5,6 are smaller  
      * Spacing 5 is unchanged from XS.
      * Spacing 4 is lower the XS spacing 4
      * Spacing 5 is the same as XS.
      * Spacing 4 is a prime number.
    * In SM nd LG first number is lower.
    * LG and XS spacing 3 is a prime number.  
  * Overall Spacing Scales are non-consistent within a breakpoint and between breakpoints.  
  * It seems that a spacing array position is already mapped to a specific use case within a page related pattern  
  * spacing is serving as a global all-purpose hierarchy unit.
  
* References for Spacing Scales: 
  * [carbon design system spacing](https://www.carbondesignsystem.com/guidelines/spacing/overview/)  
  * [polaris by shopify](https://polaris.shopify.com/design/spacing#section-the-spacing-system)

### Suggestion for Spacing Arrays
* Base unit: 8px, 0.5rem. a material UI standard. implemented in most common design systems.
* Arrays: my suggestion is to use these numbers for xs [4,8,16,20,24,32] 
* Responsive arrays: 
  Responsive arrays are complex because the difficulty in rounding numbers.
  My Suggestion is to define it using base values according to current values.
  E.g:
  * SM: [6,12,20,24,32,36]  
  * LG: [8,16,24,30,36,40]

#### Additional considerations:
* since we use Rem values, we can tweak the HTML Rem between Breakpoints, but this is not recomneded.
  * Can cause un rounded numbers. 
    
# Spacing tokens
Analysis of Current Spacing tokens.
* We have 18 tokens, in 3 breaking points each consist of a 1-6 scale.
    * XS: base
    * SM: scoped in 'sm' media query.
    * LG: scoped in 'lg' media query.
* Naming conventions are:
    * ``$spacing-{media-query}-{num}``
    * E.g :
        * ``$spacing-1: 0.375rem; //6px``
        * ``$spacing-sm-1: 0.1875rem; //3px``
* We did not interpolate tokens because we did not identify a systematic base unit or pattern.   
* We created a Scss map representing the spacing system to be used within a scss function, or a css helper class.

# Spacing Implementation
We implement spacing using a helper class or a function. 
* Helpers, css semantic classes compiled from a responsive map.
    * ``p-2`` is a padding helper for ``padding: $spacing-2;``
* Spacing semantic Function using the same map.
    * ``$some-component-padding-sm: spacing(sm,2)`` will output '$spacing-sm-2' value.
    