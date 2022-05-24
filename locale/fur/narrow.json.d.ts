import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'fur';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;