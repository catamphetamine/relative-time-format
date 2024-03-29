import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'yi';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;