import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-MV';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;