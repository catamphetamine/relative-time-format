import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pt-CV';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;