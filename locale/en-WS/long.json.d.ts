import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-WS';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;