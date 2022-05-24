import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-JE';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;