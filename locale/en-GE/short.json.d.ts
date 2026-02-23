import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-GE';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;