
/** @ngInject */
export function config(
    $logProvider: angular.ILogProvider,
    $httpProvider: angular.IHttpProvider,
    $mdThemingProvider: any,
    toastrConfig: any,
    localStorageServiceProvider: any
) {
    // enable log
    $logProvider.debugEnabled(true);
    // set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

     localStorageServiceProvider
        .setPrefix('TransmuteIndustries');


    $mdThemingProvider
        .theme('transmuteIndustriesTheme')

        .primaryPalette('blue-grey', {
            'default': '700', // by default use shade 400 from the pink palette for primary intentions
            'hue-1': '800', // use shade 100 for the <code>md-hue-1</code> class
            'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
            'hue-3': 'A400' // use shade A100 for the <code>md-hue-3</code> class
        })
        // If you specify less than all of the keys, it will inherit from the
        // default shades
        .accentPalette('amber', {
            'default': 'A700' // use shade 200 for default, and keep all other shades the same
        })

        .warnPalette('orange')
        
        .backgroundPalette('grey', {
            'default': '200',
            'hue-1': '100',
            'hue-2': '200',
            'hue-3': '800',
        })


    $mdThemingProvider
        .setDefaultTheme('transmuteIndustriesTheme');

}
