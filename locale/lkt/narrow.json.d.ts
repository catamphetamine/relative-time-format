import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'lkt';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;