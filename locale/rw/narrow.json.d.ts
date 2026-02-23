import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'rw';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;