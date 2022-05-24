import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-LC';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;