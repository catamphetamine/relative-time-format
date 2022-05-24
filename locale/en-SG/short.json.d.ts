import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-SG';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;