import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pt-CV';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;