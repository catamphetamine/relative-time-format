import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-RW';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;