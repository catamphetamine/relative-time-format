import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-PT';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;