import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ig';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;