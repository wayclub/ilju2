// RouteConfig.js
import { imagesAndDescriptions } from '.src/utils/Data.js'; // Update the path accordingly

const routes = [
    {
        path: '/',
        exact: true,
        component: 'InputForm'
    },
    ...imagesAndDescriptions.map(item => ({
        path: `/results/${item.iljuString}`,
        component: 'ResultPage'
    }))
];

export default routes;
