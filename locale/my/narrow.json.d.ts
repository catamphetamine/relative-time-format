import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'my';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;