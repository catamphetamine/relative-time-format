import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-ER';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;