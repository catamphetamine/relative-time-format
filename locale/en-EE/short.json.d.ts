import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-EE';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;