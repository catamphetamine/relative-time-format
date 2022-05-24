import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ee';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;