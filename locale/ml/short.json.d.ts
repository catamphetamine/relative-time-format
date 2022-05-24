import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ml';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;