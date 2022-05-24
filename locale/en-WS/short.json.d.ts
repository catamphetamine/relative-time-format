import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-WS';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;