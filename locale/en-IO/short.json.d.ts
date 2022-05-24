import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-IO';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;