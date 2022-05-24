import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-NF';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;