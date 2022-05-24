import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-001';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;