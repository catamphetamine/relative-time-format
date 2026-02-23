import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-UA';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;